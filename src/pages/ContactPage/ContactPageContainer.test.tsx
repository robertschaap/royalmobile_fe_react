import React from 'react';
import ContactPageContainer from './ContactPageContainer';

import { renderWithProviders } from '../../test/helpers';

describe('<ContactPageContainer />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<ContactPageContainer />);
  });
});
