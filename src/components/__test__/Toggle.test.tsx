import React from 'react';
import Toggle from '../Toggle';

import { renderWithTheme } from '../../test/helpers';

describe('<Toggle />', () => {
  it('should have the checked attribute when it is active', () => {
    const { getByTestId } = renderWithTheme(
      <Toggle
        isActive={true}
        onChange={jest.fn()} />
    );

    expect(getByTestId('toggle-input')).toHaveAttribute('checked');
  });

  it('should not have the checked attribute when it is not active', () => {
    const { getByTestId } = renderWithTheme(
      <Toggle
        isActive={false}
        onChange={jest.fn()} />
    );

    expect(getByTestId('toggle-input')).not.toHaveAttribute('checked');
  });
});
