import React from 'react';
import { render } from '../../test/helpers';

import PageTitle from '.';

describe('<PageTitle />', () => {
  it('should set the default title if no props are passed', () => {
    const { container } = render(<PageTitle />);

    expect(document.title).toBe('RoyalMobile');
    expect(container.firstChild).toBeNull();
  });

  it('it should add the page title if passed', () => {
    const { container } = render(<PageTitle page="Test" />);

    expect(document.title).toBe('RoyalMobile - Test');
    expect(container.firstChild).toBeNull();
  });
});
