import React from 'react';
import FormGroup from '.';

import { renderWithProviders } from '../../test/helpers';

describe('<FormGroup />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<FormGroup />);
  });
});
