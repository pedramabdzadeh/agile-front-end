import {Field} from './field';

export interface Product {
  title: string;
  price: number;
  image: any;
  category?: number;
  id: string;
  express?: boolean;
  archived?: boolean;
  specifications: Field[];
  vendor?: number;
}
