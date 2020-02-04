import React from 'react';
import ContactPage from '../../components/ContactPage';

import { renderWithTheme } from '../helpers';

describe('<ContactPage />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<ContactPage />);
  });
});
