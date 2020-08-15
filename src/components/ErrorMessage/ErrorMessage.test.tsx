import React from 'react';

import { renderWithTheme } from '../../test/helpers';

import ErrorMessage from '.';

describe('<ErrorMessage />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<ErrorMessage messageId="common.errorMissing" />);
  });
});
