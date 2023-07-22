import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const LogoView = styled.View`
align-items: center;
justify-content: center;
padding: 170px 0px;
`
export const Title = styled.Text`
color: ${({theme}) => theme.colors.white};
font-family: ${({theme}) => theme.fonts.bold};
font-size: 15px;
text-align: center;
`
export const Content = styled.View`
flex: 1;
padding: 24px;
justify-content: flex-end;
`
export const SignIn = styled.TouchableOpacity`
padding: 24px;
`