import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import routes from '../constants/routes';

import RootLayout from '../components/RootLayout';

import ThemeProviderContainer from './ThemeProviderContainer';
import { StoreProviderContainer } from '../store';

import '../styles/normalize.css';

const BusinessPage = React.lazy(() => import('../pages/BusinessPage'));
const CampaignsPage = React.lazy(() => import('../pages/CampaignsPage'));
const ConsumerPage = React.lazy(() => import('../pages/ConsumerPage'));
const ContactPageContainer = React.lazy(() => import('../pages/ContactPageContainer'));
const ErrorPageContainer = React.lazy(() => import('../pages/ErrorPageContainer'));
const HelpPageContainer = React.lazy(() => import('../pages/HelpPageContainer'));
const HomePage = React.lazy(() => import('../pages/HomePage'));
const OrderDetailsPageContainer = React.lazy(() => import('../pages/OrderDetailsPageContainer'));
const OrderPageContainer = React.lazy(() => import('../pages/OrderPageContainer'));
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
                <Route path={routes.CAMPAIGNS_PAGE} component={CampaignsPage} />
                <Route path={routes.CONTACT_PAGE} component={ContactPageContainer} />
                <Route path={routes.HELP_PAGE} component={HelpPageContainer} />
                <Route path={routes.CONSUMER_PAGE} component={ConsumerPage} />
                <Route path={routes.BUSINESS_PAGE} component={BusinessPage} />
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
