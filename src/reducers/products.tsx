import produce from 'immer';

const initialState = {
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

