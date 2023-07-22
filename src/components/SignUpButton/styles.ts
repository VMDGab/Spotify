import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
    activeOpacity: 0.9   
    })`
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.green};
  height: 50px;
  border-radius: 30px;
`;

export const Title = styled.Text`
color: ${({theme}) => theme.colors.black};
font-family: ${({theme}) => theme.fonts.bold};
font-size: 15px;

`