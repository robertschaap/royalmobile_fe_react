import React from 'react';
import ErrorPage from '../ErrorPage';

import { renderWithTheme } from '../../test/helpers';

describe('<ErrorPage />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<ErrorPage />);
  });
});
