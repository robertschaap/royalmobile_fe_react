import React from 'react';
import { render } from '@testing-library/react';

import StoreProviderContainer from '../../containers/StoreProviderContainer';

describe('<StoreProviderContainer />', () => {
  it('should render without crashing', () => {
    render(<StoreProviderContainer>""</StoreProviderContainer>);
  });
});
