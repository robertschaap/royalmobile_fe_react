import React from 'react';
import { Input, Select } from './FormFields';

import { renderWithProviders } from '../../test/helpers';

describe('<FormFields />', () => {
  describe('Input', () => {
    it('should render without crashing', () => {
      renderWithProviders(
        <Input
          isValid
          label="input"
          name="name"
          onBlur={jest.fn}
          onChange={jest.fn}
          value=""
        />,
      );
    });
  });

  describe('Select', () => {
    it('should render without crashing', () => {
      renderWithProviders(
        <Select
          isValid
          label="input"
          name="name"
          onBlur={jest.fn}
          onChange={jest.fn}
          options={[]}
          value=""
        />,
      );
    });
  });
});
