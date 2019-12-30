import React from 'react';
import ContactPageContainer from '../../containers/ContactPageContainer';

import { renderWithProviders } from '../helpers';

describe('<ContactPageContainer />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<ContactPageContainer />);
  });
});
