import React from 'react';
import ErrorPage from '../../components/ErrorPage';

import { renderWithTheme } from '../helpers';

describe('<ErrorPage />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<ErrorPage />);
  });
});
