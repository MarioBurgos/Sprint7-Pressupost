import { OrderService } from './../../../services/order.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-checkbox',
  templateUrl: './my-checkbox.component.html',
  styleUrls: ['./my-checkbox.component.scss'],

})
export class MyCheckboxComponent implements OnInit {

  @Input() public product: any;

  constructor(private orderService: OrderService) {
  }

  ngOnInit(): void {
  }

  toggleCheck():void{
    this.product.isChecked = !this.product.isChecked;
    this.product.isChecked ? this.orderService.addProduct(this.product) : this.orderService.removeProduct(this.product);
  }



}
