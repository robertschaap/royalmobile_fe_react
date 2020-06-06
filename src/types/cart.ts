import { Product } from './products';
import { Subscription } from './subscriptions';

export interface Cart {
  id: string;
  items: CartItem[];
  totals: {
    monthly_price: string;
    onetime_price: string;
  };
}

export interface CartItem {
  product: Product;
  subscription: Subscription;
  totals: {
    monthly_price: string;
    onetime_price: string;
  };
}
