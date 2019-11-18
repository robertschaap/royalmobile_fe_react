import React from 'react';

import Banner from '../components/Banner';
import Benefits from '../components/Benefits';
import Button from '../components/Button';
import ProductListing from '../components/ProductListing';

const products = [
  { id: 1, name: "iPhoneX 16gb", manufacturer: "Apple", price: "265" },
  { id: 2, name: "iPhone 11 Pro 128gb", manufacturer: "Apple", price: "265" },
  { id: 3, name: "Galaxy Note 10 128gb", manufacturer: "Samsung", price: "265" },
  { id: 4, name: "Galaxy s10 Plus 128gb", manufacturer: "Samsung", price: "265" },
  { id: 5, name: "Lumia 8", manufacturer: "Nokia", price: "265" },
  { id: 6, name: "P30", manufacturer: "Huawei", price: "265" },
];

const HomePage: React.FC = () => {
  return (
    <>
      <Banner />
      <ProductListing
        products={products} />
      <Button
        variant="secondary">
        Load More
      </Button>
      <Benefits />
    </>
  );
};

export default HomePage;
