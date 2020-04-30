import React from 'react';
import ContentCopy from '.';

import { renderWithTheme } from '../../test/helpers';

describe('<ContentCopy />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<ContentCopy messageId="common.errorMissing" />);
  });
});
