import React from 'react';

import { renderWithTheme } from '../../test/helpers';

import ContactPage from './ContactPage';

describe('<ContactPage />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<ContactPage />);
  });
});
