import React from 'react';

import { renderWithTheme } from '../../test/helpers';

import ErrorPage from '.';

describe('<ErrorPage />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<ErrorPage />);
  });
});
