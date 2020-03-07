import React from 'react';
import Loader from '../Loader';

import { renderWithProviders } from '../../test/helpers';

describe('<Loader />', () => {
  it('should show the loader when passed a true value', () => {
    const { queryByTestId } = renderWithProviders(<Loader show={true} />);

    expect(queryByTestId('loader')).not.toBeNull();
  });

  it('should not show the loader when passed a false value', () => {
    const { queryByTestId } = renderWithProviders(<Loader show={false} />);

    expect(queryByTestId('loader')).toBeNull();
  });
});
