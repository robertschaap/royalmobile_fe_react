import React from 'react';
import ErrorMessage from '../ErrorMessage';

import { renderWithTheme } from '../../test/helpers';

describe('<ErrorMessage />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<ErrorMessage messageId="common.errorMissing" />);
  });
});
