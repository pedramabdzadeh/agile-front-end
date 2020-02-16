import {Product} from '../features/products/models/product';

export interface Cart {
  id: number;
  products: Product[];
  total_price: number;
}
