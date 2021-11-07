import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-checkbox',
  templateUrl: './my-checkbox.component.html',
  styleUrls: ['./my-checkbox.component.scss']
})
export class MyCheckboxComponent implements OnInit {

  @Input() public input: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleCheck():void{
    this.input.isChecked = !this.input.isChecked;
  }

}
