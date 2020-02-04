import React from 'react';
import ExternalLink from '../../components/ExternalLink';

import { renderWithTheme } from '../helpers';

describe('<ExternalLink />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<ExternalLink />);
  });
});
