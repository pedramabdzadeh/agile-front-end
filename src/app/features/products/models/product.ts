import {Field} from './field';

export class Product {
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
