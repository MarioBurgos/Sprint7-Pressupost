import { EXTRAS_WEB } from './../data/mock-extras-web';
import { Order } from './../interfaces/order';
import { PRODUCTS } from './../data/mock-products';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../interfaces/product';
import { Extra } from '../interfaces/extra';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

/**
 * https://levelup.gitconnected.com/5-ways-to-share-data-between-angular-components-d656a7eb7f96 (5. Between not related c)
 */
  private allOrders: Order[] = []; //para el listado de presupuestos
  private order: Order;

  constructor() {
    this.order = {
      custName: "",
      products: [],
      totalPrice : 0
    }
  }

  //devuelve una promesa/observable de todos los productos de la BD en un Array de Product
  getProducts(): Observable<Product[]> {
    return of(PRODUCTS!);
  }
  getWebExtras(): Observable<Extra[]>{
    return of(EXTRAS_WEB!);
  }
  getOrder(): Order {
    return this.order;
  }
  getAllOrders(): Order[] {
    return this.allOrders;
  }
  getCustomerName(): string{
    return this.order.custName;
  }


  /**
   * metodos que actuan sobre los datos del pedido
   */
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
  addOrder(customerName: string): boolean {
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



