import React from 'react';
import ThankYouPageContainer from './ThankYouPageContainer';

import { renderWithProviders } from '../../test/helpers';

describe('<ThankYouPageContainer />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<ThankYouPageContainer />);
  });
});
