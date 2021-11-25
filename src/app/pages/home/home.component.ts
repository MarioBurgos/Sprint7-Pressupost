import { ProductService } from './../../services/product.service';
import { Product } from './../../interfaces/product';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Extra } from 'src/app/interfaces/extra';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public form!: FormGroup;

  public products: Product[];
  public webExtras: Extra[];

  public basePrice: number;  // representa los precios de los componentes de Home Component
  public panelPrice!: number;  // representa los precios de los componentes de WebPanel Component
  public totalPrice: number;  // representa la suma de base+panel
  public isChecked: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
  ) {

    this.products = [];
    this.webExtras = [];
    this.totalPrice = 0;
    this.basePrice = 0;
    this.isChecked = false;
  }

  ngOnInit(): void {
    //obtener los datos de los mocks mediante servicio
    this.getProducts();
    this.getWebExtras();



    //TODO : pelearme con esto más tarde
    this.form = this.formBuilder.group({
      formCheckbox: "",
      formPanel: "",
      formInputWButtons: ""
    });
  }

  /**funcion que llama a un servicio que trae los productos del mock*/
  getProducts(): void {
    this.productService.getProducts()
      .subscribe(p => this.products = p);
  }
  /** funcion similar a la anterior pero que trae los extras del producto web*/
  getWebExtras(): void {
    this.productService.getExtras()
      .subscribe(e => this.webExtras = e);
  }

  getPrice(p: Product) {
    p.isChecked ? this.basePrice += p.price : this.basePrice -= p.price;
    this.totalPrice = this.basePrice;
  }

  getPanelPrice(evt: string) {
    0
    this.panelPrice = Number(evt);
    this.panelPrice === 30 ? this.panelPrice = 0 : this.panelPrice;
    //condicional para controlar si el user introduce 1 página + 1 idioma: estaría dentro del precio base, con lo cual no hay que multiplicar nPages * nLang * 30
  }

  processTotalPrice() {
    this.totalPrice = this.basePrice + Number(this.panelPrice);
    // console.log('PanelPrice: ' +this.panelPrice);
  }
}
