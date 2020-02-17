import {Field} from './field';

export interface Product {
  title: string;
  price: number;
  image?: string;
  category?: number;
  id?: string;
  express?: boolean;
  archived?: boolean;
  specifications?: Field[];
  vendor?: number;
  vendor_name?: string;
  category_name?: string;
}
