import React from 'react';
import {
  GridBase,
  GridItem,
  calculatePercentage,
} from '../../components/Grid';

import { render } from '@testing-library/react';

describe('<Grid />', () => {
  describe('<GridBase />', () => {
    it('renders without crashing', () => {
      render(<GridBase />);
    });
  });

  describe('<GridItem />', () => {
    it('renders without crashing', () => {
      render(<GridItem />);
    });
  });

  describe('calculatePercentage', () => {
    it('should return 100 when no values are passed', () => {
      expect(calculatePercentage(undefined)).toEqual(100);
    });

    it('should return 100 when a value outside of 1 to 12 is passed', () => {
      expect(calculatePercentage(0)).toEqual(100);
      expect(calculatePercentage(13)).toEqual(100);
    });

    it('should return the value passed divided by 100', () => {
      expect(calculatePercentage(1)).toEqual(100 / 1);
      expect(calculatePercentage(5)).toEqual(100 / 5);
      expect(calculatePercentage(12)).toEqual(100 / 12);
    });
  });
});