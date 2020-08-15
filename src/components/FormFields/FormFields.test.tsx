import React from 'react';

import { renderWithProviders } from '../../test/helpers';

import { Input, Select } from './FormFields';

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
