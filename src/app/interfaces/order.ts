import { Product } from 'src/app/interfaces/product';
export interface Order {
  custName: string,
  products: Product[],

  getTotalPrice(): number;
}
