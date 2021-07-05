import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes';

import GlobalStyles from './global/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Router />
  </React.StrictMode>,
  document.getElementById('root'),
);
