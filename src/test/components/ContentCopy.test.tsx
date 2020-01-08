import React from 'react';
import ContentCopy from '../../components/ContentCopy';

import { renderWithProviders } from '../helpers';

describe('<ContentCopy />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<ContentCopy messageId="common.errorMissing" />);
  });
});
