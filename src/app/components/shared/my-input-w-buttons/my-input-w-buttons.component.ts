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

  constructor(
    private modal: NgbModal,
    ) { }

  ngOnInit(): void {
  }

  getQuantity():number{
    return this.inputExtra.quantity;
  }
  increaseValue() {
    this.inputExtra.quantity++;
    console.log("InputWButtons:// IncreaseValue: " + this.inputExtra.quantity)
  }

  decreaseValue() {
    this.inputExtra.quantity <= 1 ? this.inputExtra.quantity : this.inputExtra.quantity--;
    console.log("InputWButtons:// DecreaseValue: " + this.inputExtra.quantity)
  }

  onClickInfo() {
    this.modal.open(this.inputExtra.modal, { size: 'md', centered: true, windowClass: 'modal' });
  }
}
