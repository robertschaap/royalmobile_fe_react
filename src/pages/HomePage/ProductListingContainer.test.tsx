import React from 'react';
import { waitForElementToBeRemoved, fireEvent } from '@testing-library/react';

import ProductListingContainer from './ProductListingContainer';

import { renderWithProviders } from '../../test/helpers';
import { stubsServer } from '../../stubs';

let server: any;

describe('<ProductListingContainer />', () => {
  beforeEach(() => {
    server = stubsServer('test');
  });

  afterEach(() => {
    server.shutdown();
  });

  it('should show an error message when there is an error', () => {
    const { getByTestId } = renderWithProviders(<ProductListingContainer />, {
      products: {
        hasError: true,
      },
    });

    expect(getByTestId('error-message')).toBeInTheDocument();
  });

  it('should render an empty page if there no products', async () => {
    server.createList('product', 0);
    const { getByTestId } = renderWithProviders(<ProductListingContainer />);

    expect(getByTestId('product-listing').children.length).toBe(0);
    expect(getByTestId('button-secondary')).toBeDisabled();
    expect(getByTestId('loader')).toBeInTheDocument();

    await waitForElementToBeRemoved(() => getByTestId('loader'));

    expect(getByTestId('product-listing').children.length).toBe(0);
  });

  it('should render products if there are products', async () => {
    server.createList('product', 2);
    const { getByTestId } = renderWithProviders(<ProductListingContainer />);

    expect(getByTestId('product-listing').children.length).toBe(0);
    expect(getByTestId('button-secondary')).toBeDisabled();
    expect(getByTestId('loader')).toBeInTheDocument();

    await waitForElementToBeRemoved(() => getByTestId('loader'));

    expect(getByTestId('product-listing').children.length).toBe(2);
    expect(getByTestId('button-secondary')).not.toBeDisabled();
  });

  it('should load more products when the load more button is clicked', async () => {
    server.createList('product', 2);
    const { getByTestId } = renderWithProviders(<ProductListingContainer />);

    await waitForElementToBeRemoved(() => getByTestId('loader'));

    fireEvent.click(getByTestId('button-secondary'));

    expect(getByTestId('button-secondary')).toBeDisabled();
    expect(getByTestId('loader')).toBeInTheDocument();

    await waitForElementToBeRemoved(() => getByTestId('loader'));

    expect(getByTestId('product-listing').children.length).toBe(4);
  });
});
