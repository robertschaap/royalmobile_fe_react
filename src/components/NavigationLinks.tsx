import React from 'react';
import Link from './Link';
import routes from '../constants/routes';
import { useContentCopy } from '../hooks/useContentCopy';

export const ProductsForYouLink: React.FC = () => (
  <Link
    data-testid="products-for-you-link"
    to={routes.CONSUMER_PAGE}>
    {useContentCopy('navigation.consumer')}
  </Link>
);

export const ForYourBusinessLink: React.FC = () => (
  <Link
    data-testid="for-your-business-link"
    to={routes.BUSINESS_PAGE}>
    {useContentCopy('navigation.business')}
  </Link>
);

export const MyAccountLink: React.FC = () => (
  <Link
    data-testid="my-account-link"
    to={routes.MY_ACCOUNT_PAGE}>
    {useContentCopy('navigation.myAccount')}
  </Link>
);

export const HelpLink: React.FC = () => (
  <Link
    data-testid="help-link"
    to={routes.HELP_PAGE}>
    {useContentCopy('navigation.help')}
  </Link>
);
