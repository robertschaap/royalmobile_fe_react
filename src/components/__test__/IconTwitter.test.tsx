import React from 'react';
import { render } from '@testing-library/react';

import IconTwitter from '../IconTwitter';

describe('<IconTwitter />', () => {
  it('should render without crashing', () => {
    render(<IconTwitter />);
  });
});
