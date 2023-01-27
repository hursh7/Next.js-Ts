import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  html {
    box-sizing: border-box;
    font-size: 18px;
    min-width: 320px;
    font-family: 'Montserrat';
  }
  a { cursor: pointer; text-decoration: none; }
  user-select, li { list-style: none; }
  button {
        background: none;
        padding: 0;
        border: none;
        cursor: pointer;
        &:disabled {
            cursor: default;
        }
    }

    @font-face {
        font-family: 'Montserrat';
        font-weight: 400;
        font-style: regular;
        src: url('/fonts/Montserrat-Regular.ttf') format('ttf');
    }

    @font-face {
        font-family: 'Montserrat';
        font-weight: 500;
        font-style: medium;
        src: url('/fonts/Montserrat-Medium.ttf') format('ttf');
    }

    @font-face {
        font-family: 'Montserrat';
        font-weight: 600;
        font-style: bold;
        src: url('/fonts/Montserrat-Bold.ttf') format('ttf');
    }
`;
