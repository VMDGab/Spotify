import React, { useState } from 'react';

import { useFonts } from 'expo-font';

import { ThemeProvider } from 'styled-components';
import theme from './src/Global/theme';
import { AuthRoutes } from '@routes/Auth.Routes';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

export default function App() {
  
  const [fontsLoaded] = useFonts({
    'Gotham-bold': require('./src/assets/fonts/Gotham-Bold.otf'),
    'Gotham-light': require('./src/assets/fonts/Gotham-Light.otf'),
    'Gotham-medium': require('./src/assets/fonts/GothamMedium.ttf'),
  })

  return (

    <ThemeProvider theme={theme}>
       <StatusBar barStyle='light-content' translucent backgroundColor='transparent'/>
      <NavigationContainer>
       {fontsLoaded && <AuthRoutes />} 
      </NavigationContainer>
    </ThemeProvider>

  );
}

