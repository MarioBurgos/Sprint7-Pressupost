import { Product } from 'src/app/interfaces/product';
export interface Order {
  id: string,
  custName: string,
  products: Product[],
  totalPrice: number,
}
