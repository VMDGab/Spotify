import React from 'react';
import {
  Container,
  LogoView,
  Title,
  Content,
  SignIn,
} from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from 'styled-components';

import LogoSvg from '../../../assets/Logo.svg'

import { SignInButton } from '@components/SignInButton';
import { SignUpButton } from '@components/SignUpButton';

export function Initial() {
  const theme = useTheme()
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
          <SignUpButton />
          <SignInButton type='phone' />
          <SignInButton type='google' />
          <SignInButton type='facebook' />

        <SignIn>
          <Title>Entrar</Title>
        </SignIn>
        </Content>
      </LinearGradient>

    </Container>
  );
}