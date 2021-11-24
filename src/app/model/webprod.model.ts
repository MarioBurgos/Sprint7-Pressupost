import { Extra } from '../interfaces/extra';
import { Product } from 'src/app/interfaces/product';

export class WebProductModel implements Product {
  prodName:string = "web";
  label:string = "";
  price:number = 500;
  isChecked:boolean = false;
  extras:Extra[] = [
    {
      nameXtra: "nº páginas",
      modal: "seleccione el número de páginas que componen su sitio web.",
      priceXtra: 30,
      quantity: 1,

    },
    {
      nameXtra: "nº idiomas",
      modal: "seleccione el número de idiomas al que quiere traducir su sitio web.",
      priceXtra: 30,
      quantity: 1,
    },
  ];

  addPages(nPages: number){
    let extra: any = this.extras.find( extra => extra.nameXtra == "nº páginas");
    extra.quantity = nPages;
  }

  getExtrasPrice(): number {
    return this.extras.reduce((total, extra) => total + (extra.priceXtra * extra.quantity), 0);
  }

}
