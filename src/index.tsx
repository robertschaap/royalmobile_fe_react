import React from 'react';
import ReactDOM from 'react-dom';
import RootContainer from './containers/RootContainer';
import { makeStubsServer } from './stubs';

// TODO: make import conditional so it doesn't pollute the production package
if (process.env.REACT_APP_USESTUBS === 'true') {
  makeStubsServer();
}

ReactDOM.render(
  <RootContainer />,
  document.getElementById('root'),
);
