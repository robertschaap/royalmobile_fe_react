import React from 'react';
import DeviceColorListing from '../DeviceColorListing';

import { renderWithTheme } from '../../test/helpers';

const colors = [
  { id: 'color-id1', color: 'color-1', colorHex: '#ccc' },
  { id: 'color-id2', color: 'color-2', colorHex: '#ccc' },
  { id: 'color-id3', color: 'color-3', colorHex: '#ccc' },
];

describe('<DeviceColorListing />', () => {
  it('should render without crashing', () => {
    const { getByTestId } = renderWithTheme(
      <DeviceColorListing
        colors={[]}
        onClickColor={jest.fn()}
        selectedColorId='' />
    );

    expect(getByTestId('device-color-listing').children.length).toBe(0);
  });

  it('should render a list of colors', () => {
    const { getByTestId } = renderWithTheme(
      <DeviceColorListing
        colors={colors}
        onClickColor={jest.fn()}
        selectedColorId='' />
    );

    expect(getByTestId('device-color-listing').children.length).toBe(3);
    expect(getByTestId('device-color-listing').firstChild).toHaveAttribute('title', 'color-1');
  });

  it('should highlight the selected duration', () => {
    const { getByTestId } = renderWithTheme(
      <DeviceColorListing
        colors={colors}
        onClickColor={jest.fn()}
        selectedColorId='color-id2' />
    );

    expect(getByTestId('device-color-listing').children[0]).toHaveAttribute('data-testprop-is-selected', 'false');
    expect(getByTestId('device-color-listing').children[1]).toHaveAttribute('data-testprop-is-selected', 'true');
    expect(getByTestId('device-color-listing').children[2]).toHaveAttribute('data-testprop-is-selected', 'false');
  });
});
