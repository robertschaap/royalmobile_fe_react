import ReactDOM from 'react-dom';

import { stubsServer } from './stubs';

import { init } from './index';

jest.mock('react-dom', () => ({
  render: jest.fn(),
}));

jest.mock('./stubs', () => ({
  stubsServer: jest.fn(),
}));

describe('index.tsx', () => {
  it('should render the application', () => {
    init();

    expect(ReactDOM.render).toHaveBeenCalled();
  });

  it('should start the stubs server if REACT_APP_USESTUBS is true', async () => {
    process.env.REACT_APP_USESTUBS = 'true';

    await init();

    expect(stubsServer).toHaveBeenCalled();
    expect(ReactDOM.render).toHaveBeenCalled();
  });
});
