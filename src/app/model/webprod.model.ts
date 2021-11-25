import { EXTRAS_WEB } from './../data/mock-extras-web';
import { Extra } from '../interfaces/extra';
import { Product } from 'src/app/interfaces/product';

export class WebProductModel implements Product {
  prodName:string = "web";
  label:string = "";
  price:number = 500;
  isChecked:boolean = false;
  extras:Extra[] = EXTRAS_WEB;

  addPages(nPages: number){
    let extra: any = this.extras.find( extra => extra.label == "nº páginas");
    extra.quantity = nPages;
  }

  getExtrasPrice(): number {
    return this.extras.reduce((total, extra) => total + (extra.price * extra.quantity), 0);
  }

}
