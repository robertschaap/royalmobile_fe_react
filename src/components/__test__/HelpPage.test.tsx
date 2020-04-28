import React from 'react';
import HelpPage from '../HelpPage';

import { render } from '../../test/helpers';

describe('<HelpPage />', () => {
  it('should render without crashing', () => {
    render(<HelpPage />);
  });
});
