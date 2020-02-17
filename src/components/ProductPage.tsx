import React from 'react';

import ProductPageConfigure from './ProductPageConfigure';
import ProductPageCustomise from './ProductPageCustomise';
import ProductPageOrder from './ProductPageOrder';
import ProductPageSummary from './ProductPageSummary';

const ProductPage: React.FC = () => {
  return (
    <>
      <ProductPageCustomise />
      <ProductPageConfigure />
      <ProductPageSummary />
      <ProductPageOrder />
    </>
  );
};

export default ProductPage;
