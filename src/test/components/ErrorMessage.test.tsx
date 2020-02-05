import React from 'react';
import ErrorMessage from '../../components/ErrorMessage';

import { renderWithTheme } from '../helpers';

describe('<ErrorMessage />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<ErrorMessage messageId="common.errorMissing" />);
  });
});
