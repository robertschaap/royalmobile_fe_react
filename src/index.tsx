import React from 'react';
import ReactDOM from 'react-dom';
import RootContainer from './containers/RootContainer';

(async () => {
  if (process.env.REACT_APP_USESTUBS === 'true') {
    const { default: setupStubsServer } = await import('./stubs');
    await setupStubsServer();
  }

  ReactDOM.render(
    <RootContainer />,
    document.getElementById('root'),
  );
})();
