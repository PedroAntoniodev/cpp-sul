import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

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

    body {
        background-color: ${Colors.white};
    }

    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
    }

}
`;

export const SectionTitle = styled.h2`
  color: ${Colors.blue2};
  font-family: 'Bebas Neue', sans-serif;
  font-size: 64px;
  margin-top: 48px;
  margin-bottom: 64px;
`;
