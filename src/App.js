import React from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/core/styles';
import { StylesGlobals } from './styles/stylesGlobals';
import { AppRouter } from 'routes';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2A9F85'
    },
    secondary: {
      main: '#FF7070'
    },
  }
})

export function App() {
  return (
    <>
      <StylesGlobals />
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <AppRouter />
        </ThemeProvider>
      </StylesProvider>
    </>
  );
}

