import {Product} from '../features/products/models/product';

export interface Order {
  products: Product[];
  address: string;
  phone_number: string;
  delivery_date: string;
  total_price: number;
  total_price_before_sale: number;
  id?: number;
}

