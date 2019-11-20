import produce from 'immer';

import { IfcProduct } from '../types/products';

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
        break;
    }

    return draft;
  });
};

export default products;

