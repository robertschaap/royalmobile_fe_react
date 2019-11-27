import React from 'react';
import ErrorMessage from '../../components/ErrorMessage';

import { renderWithProviders } from '../helpers';

describe('<ErrorMessage />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<ErrorMessage messageId="common.errorMissing" />);
  });
});
