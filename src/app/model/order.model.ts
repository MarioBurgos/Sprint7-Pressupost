import { Order } from "../interfaces/order";
import { Product } from "../interfaces/product";

export class OrderModel implements Order {
  id: string;
  custName: string;
  products: Product[];
  totalPrice: number;

  constructor(id:string, custName: string, products: Product[], totalPrice: number){
    this.id = id;
    this.custName = custName;
    this.products = products;
    this.totalPrice = totalPrice;
  }

}
