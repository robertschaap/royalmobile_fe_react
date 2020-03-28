import React from 'react';
import Loader from '../Loader';

import { renderWithTheme } from '../../test/helpers';

describe('<Loader />', () => {
  it('should show the loader when passed a true value', () => {
    const { queryByTestId } = renderWithTheme(<Loader show={true} />);

    expect(queryByTestId('loader')).not.toBeNull();
  });

  it('should not show the loader when passed a false value', () => {
    const { queryByTestId } = renderWithTheme(<Loader show={false} />);

    expect(queryByTestId('loader')).toBeNull();
  });
});
