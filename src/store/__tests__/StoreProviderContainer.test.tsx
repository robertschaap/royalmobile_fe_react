import React from 'react';

import { render } from '../../test/helpers';

import { StoreProviderContainer } from '..';

describe('<StoreProviderContainer />', () => {
  it('should render without crashing', () => {
    render(<StoreProviderContainer>""</StoreProviderContainer>);
  });
});
