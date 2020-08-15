import React from 'react';

import { renderWithProviders } from '../../test/helpers';

import FormGroup from '.';

describe('<FormGroup />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<FormGroup />);
  });
});
