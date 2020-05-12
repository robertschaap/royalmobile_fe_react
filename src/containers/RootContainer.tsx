import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import routes from '../constants/routes';

import RootLayout from '../components/RootLayout';

import ThemeProviderContainer from './ThemeProviderContainer';
import { StoreProviderContainer } from '../store';

import '../styles/normalize.css';

const BusinessPageContainer = React.lazy(() => import('../pages/BusinessPageContainer'));
const CampaignsPageContainer = React.lazy(() => import('../pages/CampaignsPageContainer'));
const ConsumerPageContainer = React.lazy(() => import('../pages/ConsumerPageContainer'));
const ContactPageContainer = React.lazy(() => import('../pages/ContactPageContainer'));
const ErrorPageContainer = React.lazy(() => import('../pages/ErrorPageContainer'));
const HelpPageContainer = React.lazy(() => import('./HelpPageContainer'));
const HomePage = React.lazy(() => import('../pages/HomePage'));
const OrderDetailsPageContainer = React.lazy(() => import('./OrderDetailsPageContainer'));
const OrderPageContainer = React.lazy(() => import('./OrderPageContainer'));
const ProductPage = React.lazy(() => import('../pages/ProductPage'));

const Root: React.FC = () => {
  return (
    <StoreProviderContainer>
      <ThemeProviderContainer>
        <BrowserRouter>
          <RootLayout>
            <Suspense fallback={null}>
              <Switch>
                <Route exact path={routes.HOME_PAGE} component={HomePage} />
                <Route path={routes.PRODUCT_PAGE} component={ProductPage} />
                <Route path={routes.ORDER_DETAILS_PAGE} component={OrderDetailsPageContainer} />
                <Route path={routes.ORDER_PAGE} component={OrderPageContainer} />
                <Route path={routes.CAMPAIGNS_PAGE} component={CampaignsPageContainer} />
                <Route path={routes.CONTACT_PAGE} component={ContactPageContainer} />
                <Route path={routes.HELP_PAGE} component={HelpPageContainer} />
                <Route path={routes.CONSUMER_PAGE} component={ConsumerPageContainer} />
                <Route path={routes.BUSINESS_PAGE} component={BusinessPageContainer} />
                <Route component={ErrorPageContainer} />
              </Switch>
            </Suspense>
          </RootLayout>
        </BrowserRouter>
      </ThemeProviderContainer>
    </StoreProviderContainer>
  );
};

export default Root;
