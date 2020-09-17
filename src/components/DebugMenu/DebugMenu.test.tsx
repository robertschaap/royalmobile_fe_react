import React from 'react';

import { renderWithProviders } from '../../test/helpers';

import DebugMenu from './DebugMenu';

describe('<DebugMenu />', () => {
  it('should show the debug menu if REACT_APP_DEBUG is set', () => {
    process.env.REACT_APP_DEBUG = 'true';

    const { getByTestId } = renderWithProviders(
      <DebugMenu />,
    );

    expect(getByTestId('debug-menu')).toBeInTheDocument();
  });

  it('should not show the debug menu if REACT_APP_DEBUG is not set', () => {
    process.env.REACT_APP_DEBUG = undefined;

    const { container } = renderWithProviders(
      <DebugMenu />,
    );

    expect(container.firstChild).toBeNull();
  });
});
