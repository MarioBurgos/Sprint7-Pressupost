import { OrderService } from './../../../services/order.service';
import { Extra } from './../../../interfaces/extra';
import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-my-input-w-buttons',
  templateUrl: './my-input-w-buttons.component.html',
  styleUrls: ['./my-input-w-buttons.component.scss'],
})
export class MyInputWButtonsComponent implements OnInit {

  @Input() public inputExtra!: Extra;
  public quantity: number = 1;

  constructor(
    private orderService: OrderService,
    private modal: NgbModal,
    ) { }

  ngOnInit(): void {
  }

  getQuantity():number{
    return this.quantity;
  }
  increaseValue() {
    // let order: any = this.orderService.getOrder();
    this.quantity++;
    // order.getExtra(this.inputExtra, this.quantity);
    // console.log("InputWButtons:// IncreaseValue: " + this.inputExtra.quantity)
  }

  decreaseValue() {
    this.quantity <= 1 ? this.quantity : this.quantity--;
    // console.log("InputWButtons:// DecreaseValue: " + this.inputExtra.quantity)
  }

  onClickInfo() {
    this.modal.open(this.inputExtra.modal, { size: 'md', centered: true, windowClass: 'modal' });
  }
}
