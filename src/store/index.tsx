import { useDispatch, useSelector } from 'react-redux';
import { selectProducts, fetchProducts } from '../ducks/products';

const ProductsStore = {
  selectProducts,
  fetchProducts,
}

/**
 * TODO: finalise
 * The idea is to have a hook which can compose a store, the only thing a local component
 * would need to know is what store it is calling, the usage of select/dispatch should
 * be abstracted away from the component
 */
const useStore = () => {
  const dispatch = useDispatch();

  return {
    select: useSelector,
    dispatch: dispatch,
  }
}

export {
  useDispatch,
  useSelector,

  useStore,
  ProductsStore,
};
