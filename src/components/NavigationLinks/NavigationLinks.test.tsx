import React from 'react';
import { fireEvent } from '@testing-library/dom';

import {
  ForYourBusinessLink,
  HelpLink,
  MyAccountLink,
  OrderLink,
  ProductsForYouLink,
} from '.';

import { renderWithProviders } from '../../test/helpers';

describe('<NavigationLinks />', () => {
  describe('<ForYourBusinessLink />', () => {
    it('should render without crashing', () => {
      renderWithProviders(<ForYourBusinessLink />);
    });

    it('should redirect the user when clicked on', () => {
      const { getByTestId } = renderWithProviders(<ForYourBusinessLink />);

      fireEvent.click(getByTestId('for-your-business-link'));

      expect(window.location.pathname).toContain('/business');
    });
  });

  describe('<HelpLink />', () => {
    it('should render without crashing', () => {
      renderWithProviders(<HelpLink />);
    });

    it('should redirect the user when clicked on', () => {
      const { getByTestId } = renderWithProviders(<HelpLink />);

      fireEvent.click(getByTestId('help-link'));

      expect(window.location.pathname).toContain('/help');
    });
  });

  describe('<MyAccountLink />', () => {
    it('should render without crashing', () => {
      renderWithProviders(<MyAccountLink />);
    });

    it('should redirect the user when clicked on', () => {
      const { getByTestId } = renderWithProviders(<MyAccountLink />);

      fireEvent.click(getByTestId('my-account-link'));

      expect(window.location.pathname).toContain('/myroyalmobile');
    });
  });

  describe('<OrderLink />', () => {
    it('should render without crashing', () => {
      renderWithProviders(<OrderLink />);
    });

    it('should redirect the user when clicked on', () => {
      const { getByTestId } = renderWithProviders(<OrderLink />);

      fireEvent.click(getByTestId('order-link'));

      expect(window.location.pathname).toContain('/order');
    });
  });

  describe('<ProductsForYouLink />', () => {
    it('should render without crashing', () => {
      renderWithProviders(<ProductsForYouLink />);
    });

    it('should redirect the user when clicked on', () => {
      const { getByTestId } = renderWithProviders(<ProductsForYouLink />);

      fireEvent.click(getByTestId('products-for-you-link'));

      expect(window.location.pathname).toContain('/consumer');
    });
  });
});
