import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Material-ui Imports
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';

// Font Import
import '@fontsource/roboto';

// Theme Import
import theme from './Theme/Theme';

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);