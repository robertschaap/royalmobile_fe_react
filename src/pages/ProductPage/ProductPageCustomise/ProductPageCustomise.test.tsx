import React from 'react';

import { stubsServer, Server } from '../../../stubs';
import { renderWithTheme } from '../../../test/helpers';
import { Product } from '../../../types/products';

import ProductPageCustomise from '.';

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
        deviceModelId="model-id"
        onClickColorOrCapacity={jest.fn}
        selectedVariant={variant}
      />,
    );

    const deviceName = new RegExp(`model ${variant.capacity} ${variant.color}`, 'i');
    expect(getByTestId('device-name').textContent).toMatch(deviceName);
  });
});
