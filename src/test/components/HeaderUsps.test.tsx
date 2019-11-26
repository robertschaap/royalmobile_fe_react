import React from 'react';
import HeaderUsps from '../../components/HeaderUsps';

import { renderWithProviders } from '../helpers';

describe('<HeaderUsps />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<HeaderUsps />);
  });
});
