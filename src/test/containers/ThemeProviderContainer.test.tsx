import React from 'react';
import { render } from '@testing-library/react';

import ThemeProviderContainer from '../../containers/ThemeProviderContainer';

describe('<ThemeProviderContainer />', () => {
  it('should render without crashing', () => {
    render(<ThemeProviderContainer>""</ThemeProviderContainer>);
  });
});
