import { ProductService } from './../../services/product.service';
import { Product } from './../../interfaces/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public products: Product[];
  public basePrice: number;  // representa los precios de los componentes de Home Component
  public panelPrice!: number;  // representa los precios de los componentes de WebPanel Component
  public totalPrice: number;  // representa la suma de base+panel
  public isChecked: boolean;

  constructor(private productService: ProductService) {
    this.products = [];
    this.totalPrice = 0;
    this.basePrice = 0;
    this.isChecked = false;
   }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void{
    this.productService.getProducts()
    .subscribe(p => this.products = p);
  }

  getPrice(p: Product){
    p.isChecked ? this.basePrice+=p.price : this.basePrice-=p.price;
    this.totalPrice = this.basePrice;
  }

  getName(p: Product){
    return p.name;
  }

  getPanelPrice(evt: string){
    this.panelPrice = Number(evt);
    this.panelPrice === 30 ? this.panelPrice = 0 : this.panelPrice;
    //condicional para controlar si el user introduce 1 página + 1 idioma: estaría dentro del precio base, con lo cual no hay que multiplicar nPages * nLang * 30
  }

  processTotalPrice(){
    this.totalPrice = this.basePrice + Number(this.panelPrice);
    // console.log('PanelPrice: ' +this.panelPrice);
  }

}
