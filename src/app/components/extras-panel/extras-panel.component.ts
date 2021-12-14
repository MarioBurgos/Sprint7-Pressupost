import { AfterViewInit, Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { Extra } from 'src/app/interfaces/extra';
import { FormGroup, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-extras-panel',
  templateUrl: './extras-panel.component.html',
  styleUrls: ['./extras-panel.component.scss'],
  providers: [

]
})
export class ExtrasPanelComponent implements OnInit, AfterViewInit {

  @Input() inputExtras!: Extra[];
  @Input() formGroup!: FormGroup;

  constructor(
    private injector: Injector,
  ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    let ngControl: NgControl = this.injector.get(NgControl);
    if (ngControl) {
      this.formGroup = ngControl.control as FormGroup;
    } else {
      console.error("Wait a minute...")
    }
  }
}
