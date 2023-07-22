import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5  
  })`

height: 50px;
border-radius: 30px;
border-width:1px;
border-color: ${({theme}) => theme.colors.text_detail};
margin-top: 10px;

flex-direction: row;

`;

export const Title = styled.Text`
color: ${({theme}) => theme.colors.white};
font-family: ${({theme}) => theme.fonts.bold};
font-size: 15px;
margin-left: -10%;
text-align: center;
`
export const TitleContainer = styled.View`
width: 85%;
align-items: center;
justify-content:center;
`

export const IconContainer = styled.View`
width: 15%;
align-items: center;
justify-content:center;
`