import React from 'react';
import ExternalLink from '../ExternalLink';

import { renderWithTheme } from '../../test/helpers';

describe('<ExternalLink />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<ExternalLink />);
  });
});
