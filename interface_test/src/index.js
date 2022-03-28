import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { ThemeProvider, createTheme } from '@mui/system';

// const theme = createTheme({
//   palette: {
//     background: {
//       paper: '#fff',
//     },
//     text: {
//       primary: '#173A5E',
//       secondary: '#46505A',
//     },
//     action: {
//       active: '#001E3C',
//     },
//     success: {
//       dark: '#009688',
//     },
//   },
// });
ReactDOM.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> */}
      <App />
      {/* </ThemeProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
