import { fireEvent } from '@testing-library/dom';
import React from 'react';

import { renderWithProviders } from '../../test/helpers';

import {
  ForYourBusinessLink,
  HelpLink,
  MyAccountLink,
  OrderLink,
  ProductsForYouLink,
} from '.';

describe('<NavigationLinks />', () => {
  describe('<ForYourBusinessLink />', () => {
    it('should redirect the user when clicked on', () => {
      const { getByTestId } = renderWithProviders(<ForYourBusinessLink />);

      fireEvent.click(getByTestId('for-your-business-link'));

      expect(window.location.pathname).toContain('/business');
    });
  });

  describe('<HelpLink />', () => {
    it('should redirect the user when clicked on', () => {
      const { getByTestId } = renderWithProviders(<HelpLink />);

      fireEvent.click(getByTestId('help-link'));

      expect(window.location.pathname).toContain('/help');
    });
  });

  describe('<MyAccountLink />', () => {
    it('should redirect the user when clicked on', () => {
      const { getByTestId } = renderWithProviders(<MyAccountLink />);

      fireEvent.click(getByTestId('my-account-link'));

      expect(window.location.pathname).toContain('/myroyalmobile');
    });
  });

  describe('<OrderLink />', () => {
    it('should redirect the user when clicked on', () => {
      const { getByTestId } = renderWithProviders(<OrderLink />);

      fireEvent.click(getByTestId('order-link'));

      expect(window.location.pathname).toContain('/order');
    });
  });

  describe('<ProductsForYouLink />', () => {
    it('should redirect the user when clicked on', () => {
      const { getByTestId } = renderWithProviders(<ProductsForYouLink />);

      fireEvent.click(getByTestId('products-for-you-link'));

      expect(window.location.pathname).toContain('/consumer');
    });
  });
});
