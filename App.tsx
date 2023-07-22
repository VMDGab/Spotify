import React from 'react';

import { useFonts } from 'expo-font';

import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import theme from './src/Global/theme';
import { AuthRoutes } from '@routes/AuthRoutes';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';



export default function App() {

  const [fontsLoaded] = useFonts({
    'Gotham-bold': require('./src/assets/fonts/Gotham-Bold.otf'),
    'Gotham-light': require('./src/assets/fonts/Gotham-Light.otf'),
    'Gotham-medium': require('./src/assets/fonts/GothamMedium.ttf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (

    <ThemeProvider theme={theme}>
       <StatusBar barStyle='light-content' translucent backgroundColor='transparent'/>
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    </ThemeProvider>

  );
}

