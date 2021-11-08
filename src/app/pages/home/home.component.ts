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
  public totalPrice: number;
  public panelPrice!: number;
  public isChecked: boolean;

  constructor(private productService: ProductService) {
    this.products = [];
    this.totalPrice = 0;
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
    p.isChecked ? this.totalPrice+=p.price : this.totalPrice-=p.price;
  }

  getName(p: Product){
    return p.name;
  }

  processExtras(){
    this.totalPrice += Number(this.panelPrice);
    console.log('PanelPrice: ' +this.panelPrice);
  }

}
