import { EXTRAS_WEB } from './../data/mock-extras-web';
import { PRODUCTS } from './../data/mock-products';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../interfaces/product';
import { Extra } from '../interfaces/extra';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {

  }

  //devuelve una promesa/observable de todos los productos de la BD en un Array de Product
  getProducts(): Observable<Product[]> {
    return of(PRODUCTS!);
  }
  getWebExtras(): Observable<Extra[]>{
    return of(EXTRAS_WEB!);
  }


}



