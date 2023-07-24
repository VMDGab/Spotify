import React from 'react';
import { Container, Title } from './styles';
import { TouchableOpacityProps } from 'react-native';

interface props extends TouchableOpacityProps{
  title: string,
}
export function Filters({title, ...rest} : props) {
  return (
    <Container>
        <Title>{title}</Title>
    </Container>
  );
}