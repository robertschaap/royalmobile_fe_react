import React from 'react';
import Main from '../../components/Main';

import { renderWithTheme } from '../helpers';

describe('<Main />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<Main>""</Main>);
  });
});
