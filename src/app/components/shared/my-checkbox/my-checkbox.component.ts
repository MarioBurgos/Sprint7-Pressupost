import { Component, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-my-checkbox',
  templateUrl: './my-checkbox.component.html',
  styleUrls: ['./my-checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: MyCheckboxComponent
    },
  ]
})
export class MyCheckboxComponent implements OnInit, ControlValueAccessor {

  @Input() public product: any;

  myGroup = new FormGroup({
    formInput: new FormControl()
  });

  constructor() {
  }
  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

  toggleCheck():void{
    this.product.isChecked = !this.product.isChecked;
  }



}
