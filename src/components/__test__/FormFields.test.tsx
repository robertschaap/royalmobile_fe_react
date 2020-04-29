import React from 'react';
import { Input } from '../FormFields';

import { renderWithProviders } from '../../test/helpers';

describe('<FormFields />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<Input />);
  });
});
