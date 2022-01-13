import 'styled-components';
import theme from './theme';

//access the styled-components module
declare module 'styled-components' {
  type ThemeType = typeof theme //create a new type that will receive the theme type, so we can easily access the properties in theme

  export interface DefaultTheme extends ThemeType {} //DefaultTheme will be reassigned to the type that we declared previously
}