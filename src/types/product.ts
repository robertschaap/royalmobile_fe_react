import { ProductVariant } from './products';

// TODO: complete this with product details information
interface Product {
  id: number;
  manufacturer: string;
  model: string;
  modelId: string;
  variants: ProductVariant[];
  specifications?: {};
}
