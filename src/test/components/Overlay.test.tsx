import React from 'react';
import Overlay from '../../components/Overlay';

import { renderWithProviders } from '../helpers';

describe('<Overlay />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<Overlay />);
  });
});
