import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';

import Root from './Root';

injectGlobal`
  body, html {
    height: 100%
  }

  body {
    background-color: #FCFCFC;

    font-family:
      'San Francisco',
      -apple-system,
      BlinkMacSystemFont,
      '.SFNSText-Regular',
      Roboto,
      'Helvetica Neue',
      Helvetica,
      Arial,
      sans-serif;
    font-size: 16px;
  }

  #root {
    height: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-text-size-adjust: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

ReactDOM.render(<Root />, document.getElementById('root'));
