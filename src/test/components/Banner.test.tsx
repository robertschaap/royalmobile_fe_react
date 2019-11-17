import React from 'react';
import Banner from '../../components/Banner';

import { renderWithTheme } from '../helpers';

describe('<Banner />', () => {
  it('renders without crashing', () => {
    renderWithTheme(<Banner />);
  });
});
