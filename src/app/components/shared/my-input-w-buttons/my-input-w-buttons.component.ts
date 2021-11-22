import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-my-input-w-buttons',
  templateUrl: './my-input-w-buttons.component.html',
  styleUrls: ['./my-input-w-buttons.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: MyInputWButtonsComponent
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: MyInputWButtonsComponent
    }
  ]
})
export class MyInputWButtonsComponent implements OnInit, ControlValueAccessor, Validator {

  @Input() public inputLabel: any;
  @Input() public inputModal: any;
  @Output() emitterInputWButtons = new EventEmitter<any>();
  public value: number = 1;
  onChange = (value: number) => { };
  onTouched = () => { };
  touched = false;

  constructor(private modal: NgbModal) { }

  validate(control: AbstractControl): ValidationErrors {
    const value = control.value;
    if (value <= 1){
      return {
        mustBePositive: {value}
      };
    }else{
      return { 'custom': true };
    }

  }

  writeValue(value: number): void {
    this.value = value;
  }
  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }
  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }
  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  ngOnInit(): void {
  }

  emitValue() {
    // console.log("InputWButtons:// EmitValue: " + this.value)
    this.emitterInputWButtons.emit(String(this.value));
  }

  increaseValue() {
    this.markAsTouched();
    this.value++;
    this.onChange(this.value);
    console.log("InputWButtons:// IncreaseValue: " + this.value)
    this.emitValue();
  }

  decreaseValue() {
    this.markAsTouched();
    this.value === 1 ? this.value : this.value--;
    this.onChange(this.value);
    console.log("InputWButtons:// DecreaseValue: " + this.value)
    this.emitValue();
  }

  onClickInfo() {
    this.modal.open(this.inputModal, { size: 'md', centered: true, windowClass: 'modal' });
  }
}
