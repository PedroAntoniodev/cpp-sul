import { createGlobalStyle } from 'styled-components';

export const Colors = {
  blue: '#16AFDB',
  white: '#Fff',
  blue2: '#06313D',
  black: '#000000',
};

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Afacad", sans-serif;
        list-style: none;
    }
`;
