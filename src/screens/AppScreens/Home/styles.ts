import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.black};
`;
export const Header = styled.View`
padding: 65px 20px 20px;
flex-direction: row;
justify-content: space-between;
align-items: center;
`
export const Greating = styled.View`

`
export const Message = styled.Text`
color: ${({theme}) => theme.colors.white};
font-family: ${({theme}) => theme.fonts.bold};
font-size: 23px;
text-align: center;
`
export const Options = styled.View`
flex-direction: row;
justify-content: space-between;
width: 35%;
`
export const Notifications = styled.View`

`
export const Settings = styled.View`

`
export const FilterBar = styled.ScrollView`
padding: 15px;
height: 50px;
flex: .15;
`
export const RecentContainer = styled.View`
width: 49%;
`

export const Recent = styled.View`
flex-direction: row;
justify-content: space-between;
padding: 0 10px;
;
`