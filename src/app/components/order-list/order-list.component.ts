import { OrderService } from './../../services/order.service';
import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  public allOrders!: Order[];

  constructor(
    private orderService: OrderService,
  ) { }

  ngOnInit(): void {
    this.allOrders = this.orderService.getAllOrders();
  }

}
