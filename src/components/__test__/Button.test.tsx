import React from 'react';

import Button from '../Button';

import { renderWithTheme } from '../../test/helpers';

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
