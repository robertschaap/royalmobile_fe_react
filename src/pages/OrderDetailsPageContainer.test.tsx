import React from 'react';
import OrderDetailsPageContainer from './OrderDetailsPageContainer';

import { renderWithProviders } from '../test/helpers';

describe('<OrderDetailsPageContainer />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<OrderDetailsPageContainer>""</OrderDetailsPageContainer>);
  });
});
