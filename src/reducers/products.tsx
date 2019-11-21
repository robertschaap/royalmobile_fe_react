import produce from 'immer';

import { IfcProduct, productsStub } from '../types/products';

// TODO: remove when backend is implemented
const fakeProductListing = Array.from({ length: 12 }, (_, i) => i).map(e => ({
  ...productsStub[0],
  id: e,
}));

interface initialStateProps {
  isFetching: boolean,
  collection: Array<IfcProduct>
}

const initialState: initialStateProps = {
  isFetching: false,
  collection: [],
};

const products = (state = initialState, action: any) => {
  return produce(state, draft => {
    switch (action.type) {
      default:
        draft.collection = fakeProductListing;
        break;
    }

    return draft;
  });
};

export default products;

