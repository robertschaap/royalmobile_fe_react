import React from 'react';

import { renderWithTheme } from '../../test/helpers';

import Button from '.';

describe('<Button />', () => {
  it('should render the primary button', () => {
    const { getByTestId } = renderWithTheme(<Button variant="primary">""</Button>);

    expect(getByTestId('button-primary')).toBeInTheDocument();
  });

  it('should render the primary button', () => {
    const { getByTestId } = renderWithTheme(<Button variant="secondary">""</Button>);

    expect(getByTestId('button-secondary')).toBeInTheDocument();
  });
});
