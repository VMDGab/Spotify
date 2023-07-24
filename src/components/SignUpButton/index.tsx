import React from 'react';
import { 
    Container,
    Title,
 } from './styles';
import { TouchableOpacityProps } from 'react-native';

 interface props extends TouchableOpacityProps{
  title: string
 }
export function SignUpButton({title, ...rest} : props) {
  return (
    <Container {...rest}>
        <Title>{title}</Title>
    </Container>
  );
}