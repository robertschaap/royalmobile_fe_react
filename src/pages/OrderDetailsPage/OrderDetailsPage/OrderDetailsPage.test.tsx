import React from 'react';
import { fireEvent } from '@testing-library/react';
import OrderDetailsPage from '.';

import { renderWithTheme } from '../../../test/helpers';

describe('<OrderDetailsPage />', () => {
  it('should submit order details', () => {
    const onSubmitOrder = jest.fn();

    const { getByTestId } = renderWithTheme(
      <OrderDetailsPage
        onClickReturn={jest.fn}
        onSubmitOrder={onSubmitOrder} />,
    );

    expect(getByTestId('finalise-order-button')).toBeDisabled();

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
});
