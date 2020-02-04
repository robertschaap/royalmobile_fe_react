import React from 'react';
import { render } from '@testing-library/react';

import IconTwitter from '../../components/IconTwitter';

describe('<IconTwitter />', () => {
  it('should render without crashing', () => {
    render(<IconTwitter />);
  });
});
