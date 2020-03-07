import React from 'react';
import Main from '../Main';

import { renderWithTheme } from '../../test/helpers';

describe('<Main />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<Main>""</Main>);
  });
});
