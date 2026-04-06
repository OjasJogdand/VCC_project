import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import './styles.css';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4dd0e1',
    },
    secondary: {
      main: '#ffb74d',
    },
    background: {
      default: '#08111f',
      paper: '#0f1b31',
    },
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
    h4: {
      fontWeight: 800,
    },
    h5: {
      fontWeight: 700,
    },
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
