import React from 'react';

import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { Home } from '@screens/AppScreens/Home';
import { SignIn } from '@screens/AuthScreens/SignIn';
import { SignUp } from '@screens/AuthScreens/SignUp';
import { useTheme } from 'styled-components';
import { Platform } from 'react-native';
import { MaterialIcons  } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import LibrarySvg from '../assets/Svgs/librarysvg.svg'
const Tab = createBottomTabNavigator();

export function AppRoutes() {

  const theme = useTheme()
  return (
    <Tab.Navigator initialRouteName='Home'
    
    screenOptions={{
      tabBarActiveTintColor: theme.colors.white,
      tabBarInactiveTintColor: theme.colors.text_detail,
      tabBarStyle: {
        
        height: 70,
        backgroundColor: theme.colors.black,
        borderTopWidth: 0,
        paddingBottom:10,
        paddingHorizontal:15,
        },
      tabBarLabelStyle:{
        fontFamily: theme.fonts.medium,
        marginTop:-15,
      }
    }}
    >
  
      <Tab.Screen 
      name='Início' 
      component={Home} 
      options={{ 
        headerShown: false,
        tabBarIcon: (({color}) => <MaterialIcons name="home-filled" size={24} color={color} />)
        }} />
      <Tab.Screen 
      name='Buscar'
      component={SignIn} 
      options={{ 
        headerShown: false,
        tabBarIcon: (({color}) => <Feather name="search" size={24} color={color} />)
         }} />
      <Tab.Screen 
      name='Sua Biblioteca'
      component={SignUp}
      options={{ 
        headerShown: false,
        tabBarIcon: (({color}) => (
          <LibrarySvg  width={24} height={24} fill={color}/>
        ))
        }} />
      
    </Tab.Navigator> 

  );
}