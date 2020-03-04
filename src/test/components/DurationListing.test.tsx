import React from 'react';
import DurationListing from '../../components/DurationListing';

import { renderWithTheme } from '../helpers';

describe('<DurationListing />', () => {
  it('should render without crashing', () => {
    renderWithTheme(
      <DurationListing
        durations={[]}
        onClickDuration={jest.fn}
        selectedDurationId={''}
      />
    );
  });
});
