import React from 'react';

import Button from '../../components/Button';

import { renderWithTheme } from '../helpers';

describe('<Button />', () => {
  it('renders without crashing', () => {
    renderWithTheme(<Button variant="primary">""</Button>);
  });

  it('should render the primary button', () => {
    const { getByTestId } = renderWithTheme(<Button variant="primary">""</Button>);

    expect(getByTestId("button-primary")).toBeInTheDocument();
  });

  it('should render the primary button', () => {
    const { getByTestId } = renderWithTheme(<Button variant="secondary">""</Button>);

    expect(getByTestId("button-secondary")).toBeInTheDocument();
  });
});
