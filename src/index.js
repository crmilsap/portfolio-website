import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core';

let theme = createMuiTheme({});

theme = responsiveFontSizes(theme);

theme.typography.h1 = {
  fontSize: '1.2rem',
  '@media (min-width: 600px)': {
    fontSize: '2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.5rem',
  },
};

theme.typography.subtitle1 = {
  fontSize: '1.2rem',
  // '@media (min-width: 600px)': {
  //   fontSize: '2rem',
  // },
  // [theme.breakpoints.up('md')]: {
  //   fontSize: '2.5rem',
  // },
};

ReactDOM.render(
  
  <React.StrictMode>
    <ThemeProvider theme = {theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);