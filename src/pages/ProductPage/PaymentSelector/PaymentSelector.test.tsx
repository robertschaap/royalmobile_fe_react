import { fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import React from 'react';

import { renderWithTheme } from '../../../test/helpers';

import PaymentSelector from '.';

describe('<PaymentSelector />', () => {
  it('should show the payment selector toggle', () => {
    const { getByTestId } = renderWithTheme(<PaymentSelector />);

    expect(getByTestId('toggle')).toBeInTheDocument();
  });

  it('should deny the user the option of selecting a payment', async () => {
    const { getByTestId, container } = renderWithTheme(<PaymentSelector />);

    fireEvent.click(getByTestId('toggle'));

    expect(getByTestId('payment-selector-denied')).toBeInTheDocument();

    await waitForElementToBeRemoved(() => getByTestId('payment-selector-denied'));

    expect(container.firstChild).toBeNull();
  });
});
