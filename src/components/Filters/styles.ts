import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: .8
})`
  padding: 8px 15px;
  background-color: ${({theme}) => theme.colors.light_Black};
  border-radius: 20px;
  margin-right: 10px;
  height: 30px;
`;

export const Title = styled.Text`
color: ${({theme}) => theme.colors.white};
font-family: ${({theme}) => theme.fonts.medium};
font-size: 12px;
text-align: center;

`