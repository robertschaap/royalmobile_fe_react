import React from 'react';
import Link from '../Link';

import { renderWithProviders } from '../../test/helpers';

describe('<Link />', () => {
  it('should pass an href to the router element', () => {
    const { getByTestId } = renderWithProviders(<Link data-testid="link" to="/test" />);

    expect(getByTestId('link').getAttribute('href')).toContain('/test');
  });
});
