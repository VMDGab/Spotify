import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from 'styled-components';

import LogoSvg from '../../../assets/Svgs/Logo.svg'

import { ParamListBase, NavigationProp, useNavigation } from '@react-navigation/native';
import { SignInButton } from '@components/SignInButton';
import { SignUpButton } from '@components/SignUpButton';

import {
  Container,
  LogoView,
  Title,
  Content,
  SignIn,
} from './styles';

export function Initial() {
  const navigation = useNavigation<NavigationProp<ParamListBase>>()
  const theme = useTheme()

  function handleSignUp(){
    navigation.navigate('SignUp')
  }
  function handleLogin(){
    navigation.navigate('AppRoutes')
  }
  return (
    <Container>
      <LinearGradient style={{ flex: 1 }} colors={[theme.colors.light_Black, theme.colors.black, theme.colors.black]}>

        <LogoView>
          <LogoSvg />
        </LogoView>

        <Title>
          Milhões de músicas à sua escolha.{'\n'}
          Grátis no Spotify.
        </Title>

        <Content>
          <SignUpButton 
          title='Inscreva-se grátis'
          onPress={handleSignUp}
          />
          <SignInButton type='phone' />
          <SignInButton type='google' />
          <SignInButton type='facebook' />

        <SignIn onPress={handleLogin}>
          <Title>Entrar</Title>
        </SignIn>
        </Content>
      </LinearGradient>

    </Container>
  );
}