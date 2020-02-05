import React from 'react';
import ContentCopy from '../../components/ContentCopy';

import { renderWithTheme } from '../helpers';

describe('<ContentCopy />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<ContentCopy messageId="common.errorMissing" />);
  });
});
