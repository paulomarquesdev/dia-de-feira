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

  html {
    height: 100vh;
    body {
      height: 100%
    }
  }

  body::-webkit-scrollbar {
    width: 0.2rem;
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--textColorPost);
    border-radius: 1.3rem;
  }

  body::-webkit-scrollbar-track {
    background: rgba(0,0,0,0.3);
  }
`;

