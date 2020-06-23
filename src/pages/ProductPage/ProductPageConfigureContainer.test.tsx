/* eslint-disable prefer-destructuring */
import React from 'react';
import { fireEvent } from '@testing-library/react';
import { Subscription } from '../../types/subscriptions';
import * as productDuck from '../../store/ducks/product';
import ProductPageConfigureContainer from './ProductPageConfigureContainer';

import { renderWithProviders } from '../../test/helpers';
import { Server, stubsServer } from '../../stubs';

let server: Server;

describe('<ProductPageConfigureContainer />', () => {
  beforeEach(() => {
    server = stubsServer('test');
    server.create('subscription', { subscriptionId: 'subscription-id1-1year', durationId: '1year' });
    server.create('subscription', { subscriptionId: 'subscription-id2-1year', durationId: '1year' });
    server.create('subscription', { subscriptionId: 'subscription-id1-2year', durationId: '2year' });
    server.create('subscription', { subscriptionId: 'subscription-id2-2year', durationId: '2year' });
  });

  afterEach(() => {
    server.shutdown();
  });

  it('should show the configure section', () => {
    const subscriptions: Subscription[] = server.db.subscriptions;

    const { getByTestId } = renderWithProviders(
      <ProductPageConfigureContainer
        subscriptions={subscriptions} />,
      {
        product: {
          selection: {
            durationId: '1year',
            subscriptionId: 'subscription-id1-1year',
          },
        },
      },
    );

    expect(getByTestId('duration-listing')).toBeInTheDocument();
    expect(getByTestId('subscription-listing')).toBeInTheDocument();
  });

  it('should show change the selected duration', () => {
    const setProductSelectedDurationIdSpy = jest.spyOn(productDuck, 'setProductSelectedDurationId');
    const setProductSelectedSubscriptionIdSpy = jest.spyOn(productDuck, 'setProductSelectedSubscriptionId');
    const selectProductSelectionSpy = jest.spyOn(productDuck, 'selectProductSelection');
    const subscriptions: Subscription[] = server.db.subscriptions;

    const { getByTestId } = renderWithProviders(
      <ProductPageConfigureContainer
        subscriptions={subscriptions} />,
      {
        product: {
          selection: {
            durationId: '1year',
            subscriptionId: 'subscription-id1-1year',
          },
        },
      },
    );

    fireEvent.click(getByTestId('duration-listing').children[1]);

    expect(setProductSelectedDurationIdSpy).toHaveBeenCalledWith('2year');
    expect(setProductSelectedSubscriptionIdSpy).toHaveBeenCalledWith('subscription-id1-2year');
    expect(selectProductSelectionSpy).toReturnWith({
      durationId: '2year',
      subscriptionId: 'subscription-id1-2year',
    });
  });

  it('should show change the selected subscription', () => {
    const setProductSelectedSubscriptionIdSpy = jest.spyOn(productDuck, 'setProductSelectedSubscriptionId');
    const selectProductSelectionSpy = jest.spyOn(productDuck, 'selectProductSelection');
    const subscriptions: Subscription[] = server.db.subscriptions;

    const { getAllByTestId } = renderWithProviders(
      <ProductPageConfigureContainer
        subscriptions={subscriptions} />,
      {
        product: {
          selection: {
            durationId: '1year',
            subscriptionId: 'subscription-id1-1year',
          },
        },
      },
    );

    fireEvent.click(getAllByTestId('subscription-listing-item')[1]);

    expect(setProductSelectedSubscriptionIdSpy).toHaveBeenCalledWith('subscription-id2-1year');
    expect(selectProductSelectionSpy).toReturnWith({
      durationId: '1year',
      subscriptionId: 'subscription-id2-1year',
    });
  });

  it('should not show the configure section if there is no selection', () => {
    const subscriptions: Subscription[] = server.db.subscriptions;

    const { queryByTestId } = renderWithProviders(
      <ProductPageConfigureContainer
        subscriptions={subscriptions} />,
    );

    expect(queryByTestId('duration-listing')).not.toBeInTheDocument();
    expect(queryByTestId('subscription-listing')).not.toBeInTheDocument();
  });
});
