import React from 'react';
import Link from '../components/Link';
import routes from '../constants/routes';
import { useContentCopy } from '../hooks/useContentCopy';

export const ProductsForYouLink: React.FC = () => (
  <Link to={routes.HOME_PAGE}>
    {useContentCopy("navigation.consumer")}
  </Link>
);

export const ForYourBusinessLink: React.FC = () => (
  <Link to={routes.HOME_PAGE}>
    {useContentCopy("navigation.business")}
  </Link>
);

export const MyAccountLink: React.FC = () => (
  <Link to={routes.HOME_PAGE}>
    {useContentCopy("navigation.myAccount")}
  </Link>
);
export const HelpLink: React.FC = () => (
  <Link to={routes.HOME_PAGE}>
    {useContentCopy("navigation.help")}
  </Link>
);
