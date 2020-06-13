import React from 'react';
import routes from '../../constants/routes';
import { useContentCopy } from '../../hooks/useContentCopy';

import Link from '../Link';

export const ProductsForYouLink: React.FC = () => (
  <Link
    data-testid="products-for-you-link"
    to={routes.CONSUMER_PAGE}>
    {useContentCopy('pages.consumer')}
  </Link>
);

export const ForYourBusinessLink: React.FC = () => (
  <Link
    data-testid="for-your-business-link"
    to={routes.BUSINESS_PAGE}>
    {useContentCopy('pages.business')}
  </Link>
);

export const MyAccountLink: React.FC = () => (
  <Link
    data-testid="my-account-link"
    to={routes.MY_ACCOUNT_PAGE}>
    {useContentCopy('pages.myAccount')}
  </Link>
);

export const HelpLink: React.FC = () => (
  <Link
    data-testid="help-link"
    to={routes.HELP_PAGE}>
    {useContentCopy('pages.help')}
  </Link>
);

export const OrderLink: React.FC = () => (
  <Link
    data-testid="order-link"
    to={routes.ORDER_PAGE}>
    <span role="img" aria-label="Go to order page">🛒</span>
  </Link>
);
