import React from 'react';
import ConsumerPageContainer from './ConsumerPageContainer';

import { renderWithProviders } from '../../test/helpers';

describe('<ConsumerPageContainer />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<ConsumerPageContainer />);
  });
});
