import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent implements OnInit {

  fgInfo: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.fgInfo = this._fb.group({
      fcName: ['', Validators.required],
      fcEmail: ['', Validators.compose([Validators.email, Validators.required])],
      fcCheck: [],
    })
  }

  ngOnInit(): void {
  }

  onSubmitForm() {
    console.log(this.fgInfo.value);
    this.fgInfo.reset();
    console.log(this.fgInfo);
  }

}
