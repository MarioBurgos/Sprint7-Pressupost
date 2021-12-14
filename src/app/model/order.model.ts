import { Extra } from "../interfaces/extra";
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

  getExtra(extra: Extra, quantity: number){
    let pExtra = this.products.find( p => {
      return p.extras.find(e => e == extra);
    });
    pExtra?.extras.map ( ext => ext.quantity = quantity);
  }

}
