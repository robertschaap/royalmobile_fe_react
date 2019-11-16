import React from 'react';
import { render } from '@testing-library/react';

import PageTitle from '../../components/PageTitle';

describe('<PageTitle />', () => {
  it('should set the default title if no props are passed', () => {
    render(<PageTitle />);

    expect(document.title).toBe("RoyalMobile");
  });

  it('should change the site title if passed', () => {
    render(<PageTitle title="Test"/>);

    expect(document.title).toBe("Test");
  });

  it('it should add the page title if passed', () => {
    render(<PageTitle page="Test" />);

    expect(document.title).toBe("RoyalMobile - Test");
  });

  it('it should change the site and page title if passed', () => {
    render(<PageTitle title="Test" page="Test" />);

    expect(document.title).toBe("Test - Test");
  });
});
