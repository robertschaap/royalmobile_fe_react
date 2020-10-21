import { waitForElementToBeRemoved } from '@testing-library/react';
import React from 'react';

import { useRouteParams } from '../../hooks';
import * as productDuck from '../../store/ducks/product';
import * as subscriptionsDuck from '../../store/ducks/subscriptions';
import { Server, testStubsServer } from '../../stubs';
import { renderWithProviders } from '../../test/helpers';
import { Product } from '../../types/products';
import { Subscription } from '../../types/subscriptions';

import ProductPageContainer from './ProductPageContainer';

let server: Server;

jest.mock('../../hooks/useRouteParams', () => ({
  useRouteParams: jest.fn(),
}));

describe('<ProductPageContainer />', () => {
  beforeEach(() => {
    server = testStubsServer();
    server.create('product');
    server.create('subscription', { durationId: '1year' }); // durationId is just to suppress console error
  });

  afterEach(() => {
    server.shutdown();
  });

  it('should render an empty page', () => {
    (useRouteParams as jest.Mock).mockReturnValue({ id: '' });

    const { getByTestId } = renderWithProviders(<ProductPageContainer />);

    expect(getByTestId('error-message')).toBeInTheDocument();
  });

  it('should render the page if there are products and subscriptions', async () => {
    const product: Product = server.db.products[0];
    (useRouteParams as jest.Mock).mockReturnValue({ id: product.modelId });

    const { getByTestId } = renderWithProviders(<ProductPageContainer />);

    await waitForElementToBeRemoved(() => getByTestId('loader'));

    expect(getByTestId('product-page-customise')).toBeInTheDocument();
  });

  it('should set a default variant and subscription if there are none', async () => {
    const setProductSelectedDurationIdSpy = jest.spyOn(productDuck, 'setProductSelectedDurationId');
    const setProductSelectedSubscriptionIdSpy = jest.spyOn(productDuck, 'setProductSelectedSubscriptionId');
    const setProductSelectedVariantIdSpy = jest.spyOn(productDuck, 'setProductSelectedVariantId');

    const product: Product = server.db.products[0];
    const subscription: Subscription = server.db.subscriptions[0];
    (useRouteParams as jest.Mock).mockReturnValue({ id: product.modelId });

    const { getByTestId } = renderWithProviders(<ProductPageContainer />);

    await waitForElementToBeRemoved(() => getByTestId('loader'));

    expect(setProductSelectedDurationIdSpy).toHaveBeenCalledWith(subscription.durationId);
    expect(setProductSelectedSubscriptionIdSpy).toHaveBeenCalledWith(subscription.subscriptionId);
    expect(setProductSelectedVariantIdSpy).toHaveBeenCalledWith(product.variants[0].variantId);
  });

  it('should be disabled while fetching', () => {
    const fetchProductSpy = jest.spyOn(productDuck, 'fetchProduct');
    const fetchSubscriptionsSpy = jest.spyOn(subscriptionsDuck, 'fetchSubscriptions');
    (useRouteParams as jest.Mock).mockReturnValue({ id: 'product-id' });

    const { getByTestId } = renderWithProviders(<ProductPageContainer />);

    expect(fetchProductSpy).toHaveBeenCalled();
    expect(fetchSubscriptionsSpy).toHaveBeenCalled();
    expect(getByTestId('loader')).toBeInTheDocument();
  });

  it('should show an error message when there is an error', () => {
    (useRouteParams as jest.Mock).mockReturnValue({ id: '' });

    const { getByTestId } = renderWithProviders(<ProductPageContainer />, {
      product: {
        hasError: true,
        selection: {},
      },
      subscriptions: {
        hasError: true,
        collection: [],
      },
    });

    expect(getByTestId('error-message')).toBeInTheDocument();
  });

  it('should delete the product when the component unmounts', () => {
    const invalidateProductCollectionSpy = jest.spyOn(productDuck, 'invalidateProductCollection');

    const { unmount } = renderWithProviders(<ProductPageContainer />);

    unmount();
    expect(invalidateProductCollectionSpy).toHaveBeenCalled();
  });
});
