import React from 'react';

import PageTitle from '../components/PageTitle';
import ProductPage from '../components/ProductPage';

const ProductPageContainer: React.FC = () => {
  return (
    <>
      <PageTitle page="Product" />
      <ProductPage />
    </>
  );
};

export default ProductPageContainer;
