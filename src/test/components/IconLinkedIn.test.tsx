import React from 'react';
import { render } from '@testing-library/react';

import IconLinkedIn from '../../components/IconLinkedIn';

describe('<IconLinkedIn />', () => {
  it('should render without crashing', () => {
    render(<IconLinkedIn />);
  });
});
