import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
    activeOpacity:.6
})`
  flex-direction: row;
  align-items: center;
  background-color: ${({theme}) => theme.colors.light_Black};
  border-radius: 5px;
  width: 100%;
  margin-bottom: 7px;
`;

export const PlaylistPhoto = styled.Image`
height: 55px;
width: 55px;
margin-right: 10px;
border-bottom-left-radius: 5px;
border-top-left-radius: 5px;
` 
export const PlaylistTitle = styled.Text`
color: ${({theme}) => theme.colors.white};
font-family: ${({theme}) => theme.fonts.bold};
font-size: 10.5px;
text-align: center;
`
