import React from 'react';

import routes from '../../constants/routes';
import { ContentUtil } from '../../utils/ContentUtil';
import Link from '../Link';

export const ProductsForYouLink: React.FC = () => (
  <Link
    data-testid="products-for-you-link"
    to={routes.CONSUMER_PAGE}>
    {ContentUtil('pages.consumer')}
  </Link>
);

export const ForYourBusinessLink: React.FC = () => (
  <Link
    data-testid="for-your-business-link"
    to={routes.BUSINESS_PAGE}>
    {ContentUtil('pages.business')}
  </Link>
);

export const MyAccountLink: React.FC = () => (
  <Link
    data-testid="my-account-link"
    to={routes.MY_ACCOUNT_PAGE}>
    {ContentUtil('pages.myAccount')}
  </Link>
);

export const HelpLink: React.FC = () => (
  <Link
    data-testid="help-link"
    to={routes.HELP_PAGE}>
    {ContentUtil('pages.help')}
  </Link>
);

export const OrderLink: React.FC = () => (
  <Link
    data-testid="order-link"
    to={routes.ORDER_PAGE}>
    <span role="img" aria-label="Go to order page">🛒</span>
  </Link>
);
