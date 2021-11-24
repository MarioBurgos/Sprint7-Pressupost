import { OrderModel } from '../model/order.model';
import { Order } from './../interfaces/order';
import { PRODUCTS } from './../data/mock-products';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private allOrders: Order[] = []; //para el listado de presupuestos

  constructor() {
  }

  //devuelve una promesa/observable de todos los productos de la BD en un Array de Product
  getProducts(): Observable<Product[]> {
    return of(PRODUCTS!);
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



