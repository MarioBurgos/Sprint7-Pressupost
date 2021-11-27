import { ProductService } from './../../../services/product.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-checkbox',
  templateUrl: './my-checkbox.component.html',
  styleUrls: ['./my-checkbox.component.scss'],
  providers: [
  ]
})
export class MyCheckboxComponent implements OnInit {

  @Input() public product: any;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
  }

  toggleCheck():void{
    this.product.isChecked = !this.product.isChecked;this.productService.addProduct(this.product);
    this.product.isChecked ? this.productService.addProduct(this.product) : this.productService.removeProduct(this.product);
  }



}
