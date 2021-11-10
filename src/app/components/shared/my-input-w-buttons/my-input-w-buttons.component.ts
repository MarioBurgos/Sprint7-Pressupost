import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-input-w-buttons',
  templateUrl: './my-input-w-buttons.component.html',
  styleUrls: ['./my-input-w-buttons.component.scss']
})
export class MyInputWButtonsComponent implements OnInit {

  @Input() public inputLabel: any;
  @Output() emitterInputWButtons = new EventEmitter<any>();
  public value:number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  emitValue(){
    // console.log("InputWButtons:// EmitValue: " + this.value)
    this.emitterInputWButtons.emit(String(this.value));
  }

  increaseValue(){
    this.value++;
    // console.log("InputWButtons:// IncreaseValue: " + this.value)
    this.emitValue();
  }

  decreaseValue(){
    this.value === 1 ? this.value : this.value--;
    // console.log("InputWButtons:// DecreaseValue: " + this.value)
    this.emitValue();
  }
}
