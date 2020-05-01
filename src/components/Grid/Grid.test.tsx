import React from 'react';
import { render } from '../../test/helpers';

import {
  GridBase,
  GridItem,
  calculatePercentage,
} from './grid.styles';


describe('<Grid />', () => {
  describe('<GridBase />', () => {
    it('should render without crashing', () => {
      render(<GridBase />);
    });
  });

  describe('<GridItem />', () => {
    it('should render without crashing', () => {
      render(<GridItem />);
    });
  });

  describe('calculatePercentage()', () => {
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
