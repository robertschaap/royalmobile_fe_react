import React from 'react';

import { GridBase, GridItem } from '../components/Grid';
import Banner from '../components/Banner';
import Benefits from '../components/Benefits';
import Button from '../components/Button';

const devices = [
  { id: 1, name: "iPhoneX 16gb", manufacturer: "Apple", price: "265" },
  { id: 2, name: "iPhoneX 16gb", manufacturer: "Apple", price: "265" },
  { id: 3, name: "iPhoneX 16gb", manufacturer: "Apple", price: "265" },
  { id: 4, name: "iPhoneX 16gb", manufacturer: "Apple", price: "265" },
  { id: 5, name: "iPhoneX 16gb", manufacturer: "Apple", price: "265" },
  { id: 6, name: "iPhoneX 16gb", manufacturer: "Apple", price: "265" },
];

const HomePage: React.FC = () => {
  return (
    <>
      <Banner />
      <GridBase>
        {devices.map(d => (
          <GridItem
            key={d.id}
            xs={1}
            sm={2}
            md={3}
            lg={4}>
            <div>{d.name}</div>
            <div>{d.manufacturer}</div>
            <div>{d.price}</div>
          </GridItem>
        ))}
      </GridBase>
      <Button
        variant="secondary">
        Load More
      </Button>
      <Benefits />
    </>
  );
};

export default HomePage;
