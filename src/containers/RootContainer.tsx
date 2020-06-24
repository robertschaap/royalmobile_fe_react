import React, { Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import routes from '../constants/routes';
import history from '../history';

import RootLayout from '../components/RootLayout';

import ThemeProviderContainer from './ThemeProviderContainer';
import { StoreProviderContainer } from '../store';

import '../styles/normalize.css';

const BusinessPage = React.lazy(() => import('../pages/BusinessPage'));
const CampaignsPage = React.lazy(() => import('../pages/CampaignsPage'));
const ConsumerPage = React.lazy(() => import('../pages/ConsumerPage'));
const ContactPage = React.lazy(() => import('../pages/ContactPage'));
const ErrorPage = React.lazy(() => import('../pages/ErrorPage'));
const HelpPage = React.lazy(() => import('../pages/HelpPage'));
const HomePage = React.lazy(() => import('../pages/HomePage'));
const MyAccountPage = React.lazy(() => import('../pages/MyAccountPage'));
const OrderDetailsPage = React.lazy(() => import('../pages/OrderDetailsPage'));
const OrderPage = React.lazy(() => import('../pages/OrderPageContainer'));
const ProductPage = React.lazy(() => import('../pages/ProductPage'));
const ThankYouPage = React.lazy(() => import('../pages/ThankYouPage'));

const Root: React.FC = () => {
  return (
    <StoreProviderContainer>
      <ThemeProviderContainer>
        <Router history={history}>
          <RootLayout>
            <Suspense fallback={null}>
              <Switch>
                <Route exact path={routes.HOME_PAGE} component={HomePage} />
                <Route path={routes.BUSINESS_PAGE} component={BusinessPage} />
                <Route path={routes.CAMPAIGNS_PAGE} component={CampaignsPage} />
                <Route path={routes.CONSUMER_PAGE} component={ConsumerPage} />
                <Route path={routes.CONTACT_PAGE} component={ContactPage} />
                <Route path={routes.HELP_PAGE} component={HelpPage} />
                <Route path={routes.MY_ACCOUNT_PAGE} component={MyAccountPage} />
                <Route path={routes.ORDER_DETAILS_PAGE} component={OrderDetailsPage} />
                <Route path={routes.ORDER_PAGE} component={OrderPage} />
                <Route path={routes.PRODUCT_PAGE} component={ProductPage} />
                <Route path={routes.THANK_YOU_PAGE} component={ThankYouPage} />
                <Route component={ErrorPage} />
              </Switch>
            </Suspense>
          </RootLayout>
        </Router>
      </ThemeProviderContainer>
    </StoreProviderContainer>
  );
};

export default Root;
