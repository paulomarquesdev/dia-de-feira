import { createGlobalStyle } from 'styled-components';

export const StylesGlobals = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
  }

  html, body {
    background-color: #F6F6F6;
    margin: 0;
    padding: 0;
  }
`;
