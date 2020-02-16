import {Product} from '../features/products/models/product';

export interface Order {
  products: Product[];
  address: string;
  phone_number: string;
  delivery_date: string;
  total_price: number;
}

