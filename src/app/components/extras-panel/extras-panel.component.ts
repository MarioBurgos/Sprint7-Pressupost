import { AfterViewInit, Component, Injector, Input, OnInit } from '@angular/core';
import { Extra } from 'src/app/interfaces/extra';
import { AbstractControl, FormGroup, NgControl } from '@angular/forms';

@Component({
  selector: 'app-extras-panel',
  templateUrl: './extras-panel.component.html',
  styleUrls: ['./extras-panel.component.scss'],
  providers: [

]
})
export class ExtrasPanelComponent implements OnInit, AfterViewInit {

  @Input() inputExtras!: Extra[];
  @Input() parentForm: AbstractControl | null;

  constructor(
    private injector: Injector,
  ) {
    this.parentForm = null;
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    let ngControl: NgControl = this.injector.get(NgControl);
    if (ngControl) {
      this.parentForm = ngControl.control as FormGroup;
    } else {
      console.error("(!) Wait a minute...")
    }
  }
}
