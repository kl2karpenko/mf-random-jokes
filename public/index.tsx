import React from 'react';
import ReactDOM from 'react-dom';

import RandomJokes from '../src/RandomJokes';

export default ReactDOM.render(
  <React.StrictMode>
    <RandomJokes />
  </React.StrictMode>,
  document.getElementById('root')
);
