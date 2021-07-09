import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// Material-ui Imports
import { CssBaseline, MuiThemeProvider } from '@material-ui/core'

// React Router
import { BrowserRouter } from 'react-router-dom'

// Context
import PageTitleProvider from './Context/PageTitle'

// Font Import
import '@fontsource/roboto';

// Theme Import
import theme from './Theme/Theme'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <PageTitleProvider>
          <App />
        </PageTitleProvider>
      </MuiThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);