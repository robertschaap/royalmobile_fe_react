import React from 'react';
import Main from '.';

import { renderWithTheme } from '../../test/helpers';

describe('<Main />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<Main>""</Main>);
  });
});
