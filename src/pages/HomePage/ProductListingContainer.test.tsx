import { waitForElementToBeRemoved, fireEvent } from '@testing-library/react';
import React from 'react';

import * as productsDuck from '../../store/ducks/products';
import { testStubsServer, Server } from '../../stubs';
import { renderWithProviders } from '../../test/helpers';

import ProductListingContainer from './ProductListingContainer';

let server: Server;

describe('<ProductListingContainer />', () => {
  beforeEach(() => {
    server = testStubsServer();
  });

  afterEach(() => {
    server.shutdown();
  });

  it('should render an empty page if there no products', async () => {
    const fetchProductsSpy = jest.spyOn(productsDuck, 'fetchProducts');

    const { getByTestId } = renderWithProviders(<ProductListingContainer />);

    expect(fetchProductsSpy).toHaveBeenCalled();
    await waitForElementToBeRemoved(() => getByTestId('loader'));

    expect(getByTestId('product-listing').children.length).toBe(0);
  });

  it('should render products if there are products', async () => {
    const fetchProductsSpy = jest.spyOn(productsDuck, 'fetchProducts');

    server.createList('product', 2);
    const { getByTestId } = renderWithProviders(<ProductListingContainer />);

    expect(fetchProductsSpy).toHaveBeenCalled();
    await waitForElementToBeRemoved(() => getByTestId('loader'));

    expect(getByTestId('product-listing').children.length).toBe(2);
  });

  it('should not refetch products is they were already loaded', async () => {
    const fetchProductsSpy = jest.spyOn(productsDuck, 'fetchProducts');

    renderWithProviders(<ProductListingContainer />, {
      products: {
        isFetching: false,
        hasError: false,
        pageNumber: 4,
        collection: [],
      },
    });

    expect(fetchProductsSpy).toHaveBeenCalled();
  });

  it('should load more products when the load more button is clicked', async () => {
    const fetchProductsSpy = jest.spyOn(productsDuck, 'fetchProducts');
    server.createList('product', 2);

    const { getByTestId } = renderWithProviders(<ProductListingContainer />);

    await waitForElementToBeRemoved(() => getByTestId('loader'));
    expect(getByTestId('product-listing').children.length).toBe(2);

    fireEvent.click(getByTestId('button-secondary'));

    expect(fetchProductsSpy).toHaveBeenCalled();
    await waitForElementToBeRemoved(() => getByTestId('loader'));

    expect(getByTestId('product-listing').children.length).toBe(4);
  });

  it('should show an error message when there is an error', () => {
    const { getByTestId } = renderWithProviders(<ProductListingContainer />, {
      products: {
        isFetching: false,
        hasError: true,
        collection: [],
        pageNumber: 1,
      },
    });

    expect(getByTestId('error-message')).toBeInTheDocument();
  });

  it('should be disabled while fetching products', async () => {
    const fetchProductsSpy = jest.spyOn(productsDuck, 'fetchProducts');

    const { getByTestId } = renderWithProviders(<ProductListingContainer />);

    expect(fetchProductsSpy).toHaveBeenCalled();
    expect(getByTestId('loader')).toBeInTheDocument();
    expect(getByTestId('button-secondary')).toBeDisabled();
  });

  it('should be disabled when there are no products', async () => {
    const { getByTestId } = renderWithProviders(<ProductListingContainer />);

    await waitForElementToBeRemoved(() => getByTestId('loader'));
    expect(getByTestId('product-listing').children.length).toBe(0);
    expect(getByTestId('button-secondary')).toBeDisabled();
  });
});
