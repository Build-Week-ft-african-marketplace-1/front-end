import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from 'styled-components';
import theme from './components/styles/themes';


ReactDOM.render(
  
  <ThemeProvider theme={theme}>
    <Router>
      <React.StrictMode>
          <App />
      </React.StrictMode>
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);


