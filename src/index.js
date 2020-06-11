import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core';
import 'typeface-roboto';


let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#b71c1c',
      light: '#f05545',
      dark: '#7f0000'
    },
    secondary: {
      main: '#e0e0e0',
      light: '#4f5b62',
      dark: '#000a12',
    }
  },
  typography: {
    h1: {
      fontSize: '2.2rem',
    },
    h2: {
      fontSize: '1rem',
    },
    body1: {
      fontSize: '1rem',
    }
  }
});

theme = responsiveFontSizes(theme);

theme.overrides = {
  MuiTooltip: {
    tooltip: {
      fontSize: '1,5rem',
    },
  },
  typography: {

  }
};

ReactDOM.render(
  
  <React.StrictMode>
    <ThemeProvider theme = {theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);