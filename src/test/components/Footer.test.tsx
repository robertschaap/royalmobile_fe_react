import React from 'react';
import Footer from '../../components/Footer';

import { renderWithTheme } from '../helpers';

describe('<Footer />', () => {
  it('renders without crashing', () => {
    renderWithTheme(<Footer />);
  });
});
