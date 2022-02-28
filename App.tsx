import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/en-US';
import { ThemeProvider } from 'styled-components';
import { 
  useFonts,
  Poppins_400Regular, 
  Poppins_500Medium, 
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
/* import { Dashboard } from './src/screens/Dashboard'; */
import theme from './src/Global/Styles/theme'
import { HighlightedDataProvider } from './src/providers/highlightedData';
import { AuthProvider, useAuth } from './src/hooks/Auth';
import { Routes } from './src/routes';


export default function App() {
  //fontsLoaded will be an array that will receive a boolean value to determine if all used fonts in the app are loaded
  //if they are all loaded, then the app shall proceed
  //if not the app will wait on the splash screen in order to make sure that all fonts are loaded and ready to be used
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });
  const { isLoading } = useAuth();

  if(!fontsLoaded || isLoading) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={ theme }>
      <HighlightedDataProvider>
        <StatusBar barStyle='light-content'/>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </HighlightedDataProvider>
    </ThemeProvider>
  );
}