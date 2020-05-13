import React from 'react';
import BusinessPageContainer from './BusinessPageContainer';

import { renderWithProviders } from '../../test/helpers';

describe('<BusinessPageContainer />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<BusinessPageContainer />);
  });
});
