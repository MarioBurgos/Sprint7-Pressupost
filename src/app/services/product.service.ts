import { Order } from './../interfaces/order';
import { PRODUCTS } from './../data/mock-products';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private order!: Order; //para el presupuesto que maneja el usuario
  private orders: Order[] = []; //para el listado de presupuestos

  constructor() { }

  //devuelve una promesa/observable de todos los productos de la BD en un Array de Product
  getProducts(): Observable<Product[]>{
    return of (PRODUCTS!);
  }

  //graba un presupuesto
  createOrder(){
  }

  }

