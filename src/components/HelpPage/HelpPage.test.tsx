import React from 'react';
import HelpPage from '.';

import { render } from '../../test/helpers';

describe('<HelpPage />', () => {
  it('should render without crashing', () => {
    render(<HelpPage />);
  });
});
