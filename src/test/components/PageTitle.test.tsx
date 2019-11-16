import React from 'react';
import ReactDOM from 'react-dom';
import PageTitle from '../../components/PageTitle';

describe('<PageTitle />', () => {
  it('should set the default title if no props are passed', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PageTitle />, div);

    expect(document.title).toBe("RoyalMobile");
  });

  it('should change the site title if passed', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PageTitle title="Test" />, div);

    expect(document.title).toBe("Test");
  });

  it('it should add the page title if passed', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PageTitle page="Test" />, div);

    expect(document.title).toBe("RoyalMobile - Test");
  });

  it('it should change the site and page title if passed', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PageTitle title="Test" page="Test" />, div);

    expect(document.title).toBe("Test - Test");
  });
});


// pass title
// pass page
// pass nothing
