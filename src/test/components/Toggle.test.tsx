import React from 'react';
import Toggle from '../../components/Toggle';

import { renderWithTheme } from '../helpers';

describe('<Toggle />', () => {
  it('should have the checked attribute when it is active', () => {
    const { getByTestId } = renderWithTheme(<Toggle isActive={true} />);

    expect(getByTestId('toggle-input')).toHaveAttribute('checked');
  });

  it('should not have the checked attribute when it is not active', () => {
    const { getByTestId } = renderWithTheme(<Toggle isActive={false} />);

    expect(getByTestId('toggle-input')).not.toHaveAttribute('checked');
  });
});
