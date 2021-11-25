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
  private products: Product[] = [];
  private webExtras: Extra[] = [];
  private allOrders: Order[] = []; //para el listado de presupuestos

  constructor() {
  }

  //devuelve una promesa/observable de todos los productos de la BD en un Array de Product
  getProducts(): Observable<Product[]> {
    return of(PRODUCTS!);
  }
  getExtras(): Observable<Extra[]>{
    return of(EXTRAS_WEB!);
  }

  getAllOrders(): Order[] {
    return this.allOrders;
  }

  //graba un presupuesto, devuelve true si se ha añadido, false en caso contrario
  addOrder(order: Order): boolean {
    try {
      this.allOrders.push(order);
      return true;
    } catch (error) {
      return false;
    }
  }
  getOrderPrice(order: Order): number {
    return order.getTotalPrice();
  }
}



