import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import routes from '../constants/routes';

import CampaignsPageContainer from './CampaignsPageContainer';
import ContactPageContainer from './ContactPageContainer';
import HelpPageContainer from './HelpPageContainer';
import HomePageContainer from './HomePageContainer';
import OrderPageContainer from './OrderPageContainer';
import ProductPageContainer from './ProductPageContainer';
import RootLayout from '../components/RootLayout';

import ThemeProviderContainer from './ThemeProviderContainer';
import StoreProviderContainer from './StoreProviderContainer';

import '../styles/normalize.css';

const Root: React.FC = () => {
  return (
    <StoreProviderContainer>
      <ThemeProviderContainer>
        <BrowserRouter>
          <RootLayout>
            <Route exact path={routes.HOME_PAGE} component={HomePageContainer} />
            <Route path={routes.PRODUCT_PAGE} component={ProductPageContainer} />
            <Route path={routes.ORDER_PAGE} component={OrderPageContainer} />

            <Route path={routes.CAMPAIGNS_PAGE} component={CampaignsPageContainer} />
            <Route path={routes.CONTACT_PAGE} component={ContactPageContainer} />
            <Route path={routes.HELP_PAGE} component={HelpPageContainer} />
          </RootLayout>
        </BrowserRouter>
      </ThemeProviderContainer>
    </StoreProviderContainer>
  );
};

export default Root;
