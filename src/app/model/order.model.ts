import { Order } from "../interfaces/order";
import { Product } from "../interfaces/product";

export class OrderModel implements Order {

  custName: string;
  products: Product[];

  constructor(custName: string, products: Product[]) {
    this.custName = custName;
    this.products = products;
  }

  //recorre el array de productos del pedido y devuelve la suma de sus precios
  getTotalPrice(): number {
    var totalPrice = this.products.reduce((total, product) => total + product.price, 0);
    return totalPrice;
  }




}
