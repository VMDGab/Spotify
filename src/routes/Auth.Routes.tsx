import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Initial } from '@screens/AuthScreens/Initial';
import { SignIn } from '@screens/AuthScreens/SignIn';
import { SignUp } from '@screens/AuthScreens/SignUp';
import { AppRoutes } from './App.Routes';
const Stack = createStackNavigator();

export function AuthRoutes() {
  return (
    <Stack.Navigator initialRouteName='Initial'>
  
      <Stack.Screen name='Initial' component={Initial} options={{ headerShown: false }} />
      <Stack.Screen name='SignIn' component={SignIn} options={{ headerShown: false }} />
      <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
      <Stack.Screen name='AppRoutes' component={AppRoutes} options={{ headerShown: false }} />
    </Stack.Navigator> 

  );
}