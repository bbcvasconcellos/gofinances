import React, { createContext, ReactNode, useContext } from "react";

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
}

export const AuthContext = createContext({} as IAuthContextData);

const AuthProvider = ({ children }: AuthProps) => {
  const user = {
    id: '',
    name: '',
    email: ''
  }
  return (
    <AuthContext.Provider value={{ user }}>
      { children }
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };