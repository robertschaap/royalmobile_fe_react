import React from 'react';
import ContactPage from '.';

import { renderWithTheme } from '../../test/helpers';

describe('<ContactPage />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<ContactPage />);
  });
});
