import React from 'react';
import { fireEvent } from '@testing-library/dom';

import {
  ForYourBusinessLink,
  HelpLink,
  MyAccountLink,
  ProductsForYouLink,
} from '../../components/NavigationLinks';

import { renderWithProviders } from '../helpers';

describe('<NavigationLinks />', () => {
  describe('<ForYourBusinessLink />', () => {
    it('should render without crashing', () => {
      renderWithProviders(<ForYourBusinessLink />);
    });

    it('should redirect the user when clicked on', () => {
      const { getByTestId } = renderWithProviders(<ForYourBusinessLink />);

      fireEvent.click(getByTestId('for-your-business-link'));

      expect(location.pathname).toContain('/business');
    });
  });

  describe('<HelpLink />', () => {
    it('should render without crashing', () => {
      renderWithProviders(<HelpLink />);
    });

    it('should redirect the user when clicked on', () => {
      const { getByTestId } = renderWithProviders(<HelpLink />);

      fireEvent.click(getByTestId('help-link'));

      expect(location.pathname).toContain('/help');
    });
  });

  describe('<MyAccountLink />', () => {
    it('should render without crashing', () => {
      renderWithProviders(<MyAccountLink />);
    });

    it('should redirect the user when clicked on', () => {
      const { getByTestId } = renderWithProviders(<MyAccountLink />);

      fireEvent.click(getByTestId('my-account-link'));

      expect(location.pathname).toContain('/myroyalmobile');
    });
  });

  describe('<ProductsForYouLink />', () => {
    it('should render without crashing', () => {
      renderWithProviders(<ProductsForYouLink />);
    });

    it('should redirect the user when clicked on', () => {
      const { getByTestId } = renderWithProviders(<ProductsForYouLink />);

      fireEvent.click(getByTestId('products-for-you-link'));

      expect(location.pathname).toContain('/consumer');
    });
  });
});
