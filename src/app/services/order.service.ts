import { Injectable } from '@angular/core';
import { Order } from '../interfaces/order';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private allOrders: Order[] = [];
  private order: Order;

  constructor() {
    this.order = {
      custName: "",
      products: [],
      totalPrice : 0
    }
   }

  //getters y setters
  getAllOrders(): Order[] {
    return this.allOrders;
  }
  getOrder(): Order {
    return this.order;
  }
  getCustomerName(): string{
    return this.order.custName;
  }

  //reinicia los valores del pedido
  resetOrder(){
    this.order = {
      custName: "",
      products: [],
      totalPrice: 0,
    }
  }
  addProduct(product: Product){
    this.order.products.push(product);
    this.order.totalPrice += product.price;
  }
  removeProduct(product: Product){
    this.order.products = this.order.products.filter( p => p !== product);
    this.order.totalPrice -= product.price;

  }
   //graba un presupuesto, devuelve true si se ha añadido, false en caso contrario
   saveOrder(customerName: string): boolean {
    try {
      this.order.custName = customerName;
      this.allOrders.push(this.order);
      this.resetOrder();
      console.log(this.allOrders);
      return true;
    } catch (error) {
      return false;
    }
  }
}
