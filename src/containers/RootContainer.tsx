import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import routes from '../constants/routes';

import RootLayout from '../components/RootLayout';

import ThemeProviderContainer from './ThemeProviderContainer';
import { StoreProviderContainer } from '../store';

import '../styles/normalize.css';

const CampaignsPageContainer = React.lazy(() => import('./CampaignsPageContainer'));
const ContactPageContainer = React.lazy(() => import('./ContactPageContainer'));
const ErrorPageContainer = React.lazy(() => import('./ErrorPageContainer'));
const HelpPageContainer = React.lazy(() => import('./HelpPageContainer'));
const HomePageContainer = React.lazy(() => import('./HomePageContainer'));
const OrderDetailsPageContainer = React.lazy(() => import('./OrderDetailsPageContainer'));
const OrderPageContainer = React.lazy(() => import('./OrderPageContainer'));
const ProductPageContainer = React.lazy(() => import('./ProductPageContainer'));

const Root: React.FC = () => {
  return (
    <StoreProviderContainer>
      <ThemeProviderContainer>
        <BrowserRouter>
          <RootLayout>
            <Suspense fallback={null}>
              <Switch>
                <Route exact path={routes.HOME_PAGE} component={HomePageContainer} />
                <Route path={routes.PRODUCT_PAGE} component={ProductPageContainer} />
                <Route path={routes.ORDER_DETAILS_PAGE} component={OrderDetailsPageContainer} />
                <Route path={routes.ORDER_PAGE} component={OrderPageContainer} />
                <Route path={routes.CAMPAIGNS_PAGE} component={CampaignsPageContainer} />
                <Route path={routes.CONTACT_PAGE} component={ContactPageContainer} />
                <Route path={routes.HELP_PAGE} component={HelpPageContainer} />
                <Route path={routes.CONSUMER_PAGE} component={ErrorPageContainer} />
                <Route path={routes.BUSINESS_PAGE} component={ErrorPageContainer} />
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
