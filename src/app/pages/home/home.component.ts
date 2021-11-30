import { OrderService } from './../../services/order.service';
import { FormControl } from '@angular/forms';
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

  public form = new FormControl('');

  public products: Product[] = [];
  public webExtras: Extra[] = [];
  public customerName: string = "";
  public orderPrice = 0;

  constructor(
    private productService: ProductService, // gestiona los productos
    private orderService: OrderService, // gestiona los pedidos
  ) {
  }

  ngOnInit(): void {
    //obtener los datos de los mocks mediante servicio
    this.getProducts();
  }

  /**funcion que llama al servicio que trae los productos montados con sus extras*/
  getProducts(): void {
    this.products = this.productService.getProducts();
    console.log("HomeComponent");
    console.log(this.products);
  }
  getOrderPrice():void{
    this.orderPrice = this.orderService.calcOrderPrice();
  }

  saveOrder(){
    this.orderService.saveOrder(this.customerName);
    this.form.reset();
  }

}
