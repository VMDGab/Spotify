import React from 'react';
import { Feather } from '@expo/vector-icons'; 
import GoogleSvg from '../../assets/google.svg';
import FacebookSvg from '../../assets/Facebook.svg';
import {
  Container,
  TitleContainer,
  Title,
  IconContainer
} from './styles';

interface Props {
  type: 'phone' | 'google' | 'facebook',
  
}
export function SignInButton({type}: Props) {
  return (
    <Container type={type}>
      <IconContainer>
      {
      type === 'phone' ? <Feather name="smartphone" size={24} color="white" /> 
      : 
      type === 'google' ? <GoogleSvg height={24} width={24}/> 
      : 
      <FacebookSvg height={24} width={24}/>
      }
      </IconContainer>

      <TitleContainer>
      <Title>
        {
          type === 'phone' ? `Continuar com um número de ${'\n'}telefone`
          : 
          type === 'google' ? 'Continuar com Google'
          : 
          'Continuar com facebook'
        }
      </Title>
      </TitleContainer>
    </Container>
  );
}