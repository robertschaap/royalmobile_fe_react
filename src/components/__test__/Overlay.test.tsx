import React from 'react';
import Overlay from '../Overlay';

import { renderWithProviders } from '../../test/helpers';

describe('<Overlay />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<Overlay />);
  });
});
