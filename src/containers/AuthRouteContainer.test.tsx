import React from 'react';

import { renderWithProviders } from '../test/helpers';

import AuthRouteContainer from './AuthRouteContainer';

const TestComponent = () => {
  return (
    <div data-testid="test-component" />
  );
};

describe('<AuthRouteContainer />', () => {
  it('should render a route if user is authenticated', () => {
    const { getByTestId } = renderWithProviders(
      <AuthRouteContainer
        path="/"
        component={TestComponent} />,
      {
        auth: {
          collection: { token: 'a_valid_auth_token' },
        },
      },
    );

    expect(getByTestId('test-component')).toBeInTheDocument();
  });

  it('should render not a route if user is not authenticated', () => {
    const { queryByTestId } = renderWithProviders(
      <AuthRouteContainer
        path="/"
        component={TestComponent} />,
    );

    expect(queryByTestId('test-component')).not.toBeInTheDocument();
    expect(window.location.pathname).toContain('/login');
  });
});
