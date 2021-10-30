import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './Redux'
import { Provider } from 'react-redux'

import './index.scss';
import App from './App';

import { createTheme,ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
        main: '#33691e',
    }
  }});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
       <App />
       </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);


