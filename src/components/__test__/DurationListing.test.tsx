import React from 'react';
import DurationListing from '../DurationListing';

import { renderWithTheme } from '../../test/helpers';

const durations = ['duration-id1', 'duration-id2', 'duration-id3'];


describe('<DurationListing />', () => {
  it('should render without crashing', () => {
    const { getByTestId } = renderWithTheme(
      <DurationListing
        durations={[]}
        onClickDuration={jest.fn()}
        selectedDurationId='' />
    );

    expect(getByTestId('duration-listing').children.length).toBe(0);
  });

  it('should render a list of durations', () => {
    const { getByTestId } = renderWithTheme(
      <DurationListing
        durations={durations}
        onClickDuration={jest.fn()}
        selectedDurationId='' />
    );

    expect(getByTestId('duration-listing').children.length).toBe(3);
  });

  it('should highlight the selected duration', () => {
    const { getByTestId } = renderWithTheme(
      <DurationListing
        durations={durations}
        onClickDuration={jest.fn()}
        selectedDurationId='duration-id2' />
    );

    const list = getByTestId('duration-listing').children;
    expect(list[0]).toHaveAttribute('data-testprop-is-selected', 'false');
    expect(list[1]).toHaveAttribute('data-testprop-is-selected', 'true');
    expect(list[2]).toHaveAttribute('data-testprop-is-selected', 'false');
  });
});
