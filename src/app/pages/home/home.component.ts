import { ProductService } from './../../services/product.service';
import { Product } from './../../interfaces/product';
import { Component, OnInit } from '@angular/core';
import { Extra } from 'src/app/interfaces/extra';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public products: Product[] = [];
  public webExtras: Extra[] = [];
  public customerName: string = "";
  public orderPrice = 0;

  constructor(
    private productService: ProductService,
  ) {
  }

  ngOnInit(): void {
    //obtener los datos de los mocks mediante servicio
    this.getProducts();
    this.getWebExtras();
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
  getOrderPrice():void{
    this.orderPrice = this.productService.getOrder().totalPrice;
  }

  addOrder(){
    console.log(this.productService.getOrder());
    this.productService.addOrder();
  }

}
