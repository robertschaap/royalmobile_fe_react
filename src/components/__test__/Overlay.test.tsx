import React from 'react';
import Overlay from '../Overlay';

import { renderWithTheme } from '../../test/helpers';

describe('<Overlay />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<Overlay />);
  });
});
