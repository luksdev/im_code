import React from 'react';
import ReactDOM from 'react-dom';
import Main from './page/main';

import GlobalStyle from '../src/styles/global';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);
