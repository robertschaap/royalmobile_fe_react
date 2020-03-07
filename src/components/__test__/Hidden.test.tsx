import React from 'react';
import Hidden from '../Hidden';

import { render } from '../../test/helpers';

describe('<Hidden />', () => {
  it('should render without crashing', () => {
    render(<Hidden />);
  });
});
