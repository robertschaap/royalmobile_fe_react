import React from 'react';
import ProductPageCustomise from '.';
import { Product } from '../../../types/products';

import { renderWithTheme } from '../../../test/helpers';
import { stubsServer, Server } from '../../../stubs';

let server: Server;

describe('<ProductPageCustomise />', () => {
  beforeAll(() => {
    server = stubsServer('test');
    server.create('product');
  });

  afterAll(() => {
    server.shutdown();
  });

  it('should render without crashing', () => {
    const product: Product = server.db.products[0];
    const variant = product.variants[0];

    const { getByTestId } = renderWithTheme(
      <ProductPageCustomise
        capacities={[]}
        colors={[]}
        deviceManufacturer='manufacturer'
        deviceModel='model'
        onClickColorOrCapacity={jest.fn}
        selectedVariant={variant}
      />,
    );

    const deviceName = new RegExp(`model ${variant.capacity} ${variant.color}`, 'i');
    expect(getByTestId('device-name').textContent).toMatch(deviceName);
  });
});
