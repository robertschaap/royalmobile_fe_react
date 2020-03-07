import React from 'react';
import HeaderUsps from '../HeaderUsps';

import { renderWithProviders } from '../../test/helpers';

describe('<HeaderUsps />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<HeaderUsps />);
  });
});
