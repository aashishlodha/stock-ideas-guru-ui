import '@mantine/core/styles.css';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import AppRoutes from './routes/AppRoutes';
import { theme } from './theme';

export default function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <MantineProvider theme={theme}>
          <AppRoutes />
        </MantineProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
}
