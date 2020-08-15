import { fireEvent } from '@testing-library/react';
import React from 'react';

import { renderWithTheme } from '../../test/helpers';

import Toggle from '.';

describe('<Toggle />', () => {
  it('should have the checked attribute when it is active', () => {
    const { getByTestId } = renderWithTheme(
      <Toggle
        isActive={true}
        onChange={jest.fn()} />,
    );

    expect(getByTestId('toggle-input')).toHaveAttribute('checked');
  });

  it('should not have the checked attribute when it is not active', () => {
    const { getByTestId } = renderWithTheme(
      <Toggle
        isActive={false}
        onChange={jest.fn()} />,
    );

    expect(getByTestId('toggle-input')).not.toHaveAttribute('checked');
  });

  it('should handle click events', () => {
    const onChange = jest.fn();
    const { getByTestId } = renderWithTheme(
      <Toggle
        isActive={false}
        onChange={onChange} />,
    );

    fireEvent.click(getByTestId('toggle-input'));

    expect(onChange).toHaveBeenCalled();
  });
});
