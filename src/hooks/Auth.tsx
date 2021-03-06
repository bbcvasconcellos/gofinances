import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as AuthSession from 'expo-auth-session';
import * as AppleAuthentication from 'expo-apple-authentication';

const { CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;

interface AuthProps {
  children: ReactNode;
}

interface User {
  id: string;
  name: string;
  email: string;
  photo?: string;
}

interface IAuthContextData {
  user: User;
  signInWithGoogle: () => Promise<void>;
  signInWithApple: () => Promise<void>;
  signOut: () => Promise<void>;
  isLoading: boolean;
}

interface AuthResponse {
  params: {
    access_token: string;
  }
  type: string;
}

export const AuthContext = createContext({} as IAuthContextData);

const AuthProvider = ({ children }: AuthProps) => {
  const [user, setUser] = useState<User>({} as User);
  const [isLoading, setIsLoading] = useState(true);
  const key = '@gofinances:user';

  const signInWithGoogle = async() => {
    try {
      const RESPONSE_TYPE = 'token';
      const SCOPE = encodeURI('profile email');

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
      
      const { params, type } = await AuthSession.startAsync({ authUrl }) as AuthResponse;

      if(type === 'success') {
        const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`);
        const userInfo =  await response.json();

        const userLogged = {
          id: userInfo.id,
          email: userInfo.email,
          name: userInfo.name,
          photo: userInfo.picture
        }
        
        setUser(userLogged);
        await AsyncStorage.setItem(key, JSON.stringify(userLogged));
      }

    } catch(error: any) {  
      throw new Error(error);
    }
  }

  const signInWithApple = async() => {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      })

      if(credential) {
        const name = credential.fullName!.givenName!;
        const userLogged = {
          id: String(credential.user),
          name,
          email: credential.email!,
          photo: `https://ui-avatars.com/api/?name=${name}&lenght=1`
        }

        setUser(userLogged);
        await AsyncStorage.setItem(key, JSON.stringify(userLogged));
      }
    } catch(error: any) {
      throw new Error(error)
    }
  }

  const signOut = async() => {
    setUser({} as User);
    await AsyncStorage.removeItem(key);
  }

  useEffect(() => {
    const loadUserStorageData = async() => {
      const userStorage = await AsyncStorage.getItem(key)

      if(userStorage) {
        const userLogged = JSON.parse(userStorage) as User;
        setUser(userLogged);
      }
      setIsLoading(false);
    }
    loadUserStorageData();
  }, []);
  
  return (
    <AuthContext.Provider value={{ 
      user, 
      signInWithGoogle, 
      signInWithApple, 
      signOut,
      isLoading
    }}>
      { children }
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };