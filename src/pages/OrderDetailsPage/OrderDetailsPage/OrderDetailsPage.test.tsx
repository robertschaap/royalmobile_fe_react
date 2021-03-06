import { fireEvent } from '@testing-library/react';
import React from 'react';

import { renderWithTheme } from '../../../test/helpers';

import OrderDetailsPage from '.';

describe('<OrderDetailsPage />', () => {
  it('should focus the first field', () => {
    const { getByTestId } = renderWithTheme(
      <OrderDetailsPage
        onClickReturn={jest.fn}
        onSubmitOrder={jest.fn} />,
    );

    expect(getByTestId('initials')).toHaveFocus();
  });

  it('should submit order details', () => {
    const onSubmitOrder = jest.fn();

    const { getByTestId } = renderWithTheme(
      <OrderDetailsPage
        onClickReturn={jest.fn}
        onSubmitOrder={onSubmitOrder} />,
    );

    fireEvent.change(getByTestId('initials'), { target: { value: 'initials' } });
    fireEvent.change(getByTestId('lastname'), { target: { value: 'lastname' } });
    fireEvent.change(getByTestId('email'), { target: { value: 'email' } });
    fireEvent.change(getByTestId('zipcode'), { target: { value: 'zipcode' } });
    fireEvent.change(getByTestId('housenumber'), { target: { value: 'housenumber' } });
    fireEvent.change(getByTestId('iban'), { target: { value: 'iban' } });

    expect(getByTestId('finalise-order-button')).toBeEnabled();

    fireEvent.click(getByTestId('finalise-order-button'));

    expect(onSubmitOrder).toHaveBeenCalledWith({
      initials: 'initials',
      lastname: 'lastname',
      sex: 'male',
      email: 'email',
      zipcode: 'zipcode',
      housenumber: 'housenumber',
      country: 'nl',
      iban: 'iban',
    });
  });

  it('should not submit order details when the form is invalid', () => {
    const onSubmitOrder = jest.fn();

    const { getByTestId } = renderWithTheme(
      <OrderDetailsPage
        onClickReturn={jest.fn}
        onSubmitOrder={onSubmitOrder} />,
    );

    fireEvent.click(getByTestId('finalise-order-button'));

    expect(onSubmitOrder).toHaveBeenCalled();
  });
});
