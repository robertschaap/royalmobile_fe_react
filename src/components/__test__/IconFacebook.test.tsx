import React from 'react';
import { render } from '@testing-library/react';

import IconFacebook from '../IconFacebook';

describe('<IconFacebook />', () => {
  it('should render without crashing', () => {
    render(<IconFacebook />);
  });
});
