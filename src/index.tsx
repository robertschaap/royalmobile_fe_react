import React from 'react';
import ReactDOM from 'react-dom';

import RootContainer from './containers/RootContainer';

(async () => {
  if (process.env.REACT_APP_USESTUBS === 'true') {
    const { stubsServer } = await import('./stubs');
    await stubsServer();
  }

  ReactDOM.render(
    <RootContainer />,
    document.getElementById('root'),
  );
})();
