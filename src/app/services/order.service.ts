import { OrderModel } from './../model/order.model';
import { Injectable } from '@angular/core';
import { Order } from '../interfaces/order';
import { Product } from '../interfaces/product';
import { Extra } from '../interfaces/extra';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private allOrders: Order[] = [];
  private order: Order;

  constructor() {
    this.order = new OrderModel('','', new Array<Product>(), 0);
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

  setExtrasQuantity(extra: Extra, quantity: number){
    let pExtra = this.order.products.find( p => {
      return p.extras.find(e => e == extra);
    });
    pExtra?.extras.map ( ext => ext.quantity = quantity);
  }

  // Método que reinicia los valores del pedido
  resetOrder(){
    this.order = new OrderModel('','', new Array<Product>(), 0);
  }

  // Este añade el producto a la lista de orders
  addProduct(product: Product){
    this.order.products.push(product);
    this.order.totalPrice = this.calcOrderPrice();
  }
  removeProduct(product: Product){
    this.order.products = this.order.products.filter( p => p !== product);
    this.order.totalPrice = this.calcOrderPrice();
  }

  //Calcula el precio total de los extras WEB
  // (nPages * nLanguages * 30)
  calcExtrasPrice(product: Product): number{
    let extrasPrice = 0;
    let pile = 1;
    product.extras.forEach(extra => {
      pile *= extra.quantity;
    });
    extrasPrice = pile*30;
    return extrasPrice;
  }
  //Calcula el precio total del pedido
  // (Product Price + Extras)
  calcOrderPrice(): number{
    let orderPrice = this.order.products.reduce((pile, product) => {
      let extrasPrice = this.calcExtrasPrice(product);
      extrasPrice === 30 ? extrasPrice = 0 : extrasPrice; //controla que no se sume el precio si no hay más de 1 página/idioma
      return pile + product.price + extrasPrice;
    }, 0);
    return orderPrice;
  }


   //graba un presupuesto, devuelve true si se ha añadido, false en caso contrario
   saveOrder(customerName: string): boolean {
    try {
      this.order.id = String(Math.floor(Math.random()*10000)); //de momento genera un id random
      this.order.custName = customerName;
      this.order.totalPrice = this.calcOrderPrice();
      this.allOrders.push(this.order);
      this.resetOrder();
      console.log(this.allOrders);
      return true;
    } catch (error) {
      return false;
    }
  }
}
