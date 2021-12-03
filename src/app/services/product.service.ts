import { EXTRAS_ADS } from './../data/mock-extras-ads';
import { EXTRAS_SEO } from './../data/mock-extras-seo';
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
  getProductsList(): Observable<Product[]> {
    return of(PRODUCTS!);
  }
  getWebExtrasList(): Observable<Extra[]> {
    return of(EXTRAS_WEB!);
  }
  getSeoExtrasList(): Observable<Extra[]> {
    return of(EXTRAS_SEO!);
  }
  getAdsExtrasList(): Observable<Extra[]> {
    return of(EXTRAS_ADS!);
  }

  /** LLama a los métodos anteriores para obtener las promesas de los productos y extras registrados.
    El método ecuentra los productos y les añade los extras correspondientes.  Luego devuelve un Array de Product[] bien montado.
  */
  getProducts(): Product[] {
    let products: Product[] = [];
    let webExtras: Extra[] = [];
    let seoExtras: Extra[] = [];
    let adsExtras: Extra[] = [];

    //traer todas las listas de productos/extras
    this.getProductsList()
      .subscribe(p => products = p);
    this.getWebExtrasList()
      .subscribe(web => webExtras = web);
    this.getSeoExtrasList()
      .subscribe(seo => seoExtras = seo);
    this.getAdsExtrasList()
      .subscribe(ads => adsExtras = ads);

      console.warn(products); //por algun motivo desconocido está trayendo el producto WEB con nombre "ads"

    //busca los extras de cada producto (ahora solo hay web, pero es facilmente escalable añadiendo otros listados de extras y nuevos métodos para traer sus promesas), y los pushea al array de extras del producto pertinente.
    try {
      let webProduct = products.find(p => p.prodName === 'web');
      webExtras.forEach(we => {
        webProduct?.extras.push(we);
      });
    } catch (error) {
      console.error("No extras for WEB");
    }
    try {
      let seoProduct = products.find(p => p.prodName === 'seo');
      seoExtras.forEach(se => {
        seoProduct?.extras.push(se);
      });
    } catch (error) {
      console.error("No extras for SEO");
    }
    try {
      let adsProduct = products.find(p => p.prodName === 'ads');
      adsExtras.forEach(ae => {
        adsProduct?.extras.push(ae);
      });
    } catch (error) {
      console.error("No extras for ADS");
    }
    return products;
  }


}



