import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <App />
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);