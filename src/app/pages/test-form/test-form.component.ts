import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent implements OnInit {

  fgInfo = new FormGroup({
    fcName : new FormControl(''),
    fcLastName: new FormControl(''),
    fgAddress: new FormGroup({
      fcStreet: new FormControl(''),
      fcCity: new FormControl('')
    }),

  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitForm(){
    console.log(this.fgInfo.value);
    this.fgInfo.reset();
  }
}
