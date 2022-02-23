import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string,
      black: string,
      darkGrey: string
    },
    fontSize: {
      xxl: string,
      xl: string,
      l: string,
      m: string,
      s: string,
      xs: string
      xxs: string
    }
  }
}
