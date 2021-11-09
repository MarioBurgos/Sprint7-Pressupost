import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-input-w-buttons',
  templateUrl: './my-input-w-buttons.component.html',
  styleUrls: ['./my-input-w-buttons.component.scss']
})
export class MyInputWButtonsComponent implements OnInit {

  @Input() public inputLabel: any;
  @Output() emitterInputWButtons = new EventEmitter<string>();
  public value:number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  emitOnChanges(){
    this.emitterInputWButtons.emit(String(this.value));
  }

  increaseValue(){
    this.value++;
  }

  decreaseValue(){
    this.value === 1 ? this.value : this.value--;
  }

}
