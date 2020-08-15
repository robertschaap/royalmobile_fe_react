import React from 'react';

import { renderWithProviders } from '../../test/helpers';

import HeaderUsps from '.';

describe('<HeaderUsps />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<HeaderUsps />);
  });
});
