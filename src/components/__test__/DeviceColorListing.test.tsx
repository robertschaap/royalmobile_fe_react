import React from 'react';
import DeviceColorListing from '../DeviceColorListing';

import { renderWithTheme } from '../../test/helpers';

describe('<DeviceColorListing />', () => {
  it('should render a list of colors', () => {
    const colors = [{ color: 'fff' }, { color: 'fff' }];
    const { getByTestId } = renderWithTheme(<DeviceColorListing colors={colors} />);

    expect(getByTestId('device-color-listing').children.length).toBe(2);
  });

  it('should render a list of colors', () => {
    const { getByTestId } = renderWithTheme(<DeviceColorListing colors={[]} />);

    expect(getByTestId('device-color-listing').children.length).toBe(0);
  });
});
