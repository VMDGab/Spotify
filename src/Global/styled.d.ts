import 'styled-components';
import Theme from './theme';

declare module 'styled-components' {

type ThemeType =  typeof Theme

export interface DefaultTheme extends ThemeType {}
}