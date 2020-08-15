import React from 'react';

import { renderWithTheme } from '../../test/helpers';

import Main from '.';

describe('<Main />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<Main>""</Main>);
  });
});
