import React from 'react';
import PaymentSelector from '../PaymentSelector';

import { renderWithTheme } from '../../test/helpers';

describe('<PaymentSelector />', () => {
  it('should render without crashing', () => {
    renderWithTheme(
      <PaymentSelector
        isToggleActive={true}
        onChangeToggle={jest.fn()} />,
    );
  });
});
