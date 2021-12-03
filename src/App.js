import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';

import theme from './theme';
import { RootRoutes } from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/custom.css"

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <RootRoutes />
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}
