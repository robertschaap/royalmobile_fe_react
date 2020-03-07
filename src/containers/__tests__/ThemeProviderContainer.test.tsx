import React from 'react';
import { render } from '../../test/helpers';

import ThemeProviderContainer from '../ThemeProviderContainer';

describe('<ThemeProviderContainer />', () => {
  it('should render without crashing', () => {
    render(<ThemeProviderContainer>""</ThemeProviderContainer>);
  });
});
