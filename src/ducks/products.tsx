import { StoreStateType } from '../reducers/index'

export const getProducts = (state: StoreStateType) => state.products;
export const getProductsCollection = (state: StoreStateType) => state.products.collection;
