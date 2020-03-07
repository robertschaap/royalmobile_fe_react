import React from 'react';
import DurationListing from '../DurationListing';

import { renderWithTheme } from '../../test/helpers';

const durations = [
  { id: 'duration-id1', duration: 'Duration 1' },
  { id: 'duration-id2', duration: 'Duration 2' },
  { id: 'duration-id3', duration: 'Duration 3' },
];

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
    expect(getByTestId('duration-listing').firstChild).toHaveTextContent('Duration 1');
  });

  it('should highlight the selected duration', () => {
    const { getByText } = renderWithTheme(
      <DurationListing
        durations={durations}
        onClickDuration={jest.fn()}
        selectedDurationId='duration-id2' />
    );

    expect(getByText('Duration 1')).toHaveAttribute('data-testprop-is-selected', 'false');
    expect(getByText('Duration 2')).toHaveAttribute('data-testprop-is-selected', 'true');
    expect(getByText('Duration 3')).toHaveAttribute('data-testprop-is-selected', 'false');
  });
});
