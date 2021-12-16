import { Component, Input, OnInit } from '@angular/core';
import { Extra } from 'src/app/interfaces/extra';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-extras-panel',
  templateUrl: './extras-panel.component.html',
  styleUrls: ['./extras-panel.component.scss'],
  providers: [

]
})
export class ExtrasPanelComponent implements OnInit {

  @Input() inputExtras!: Extra[];
  @Input() parentForm!: FormGroup;

  constructor(
  ) {
  }

  ngOnInit(): void {

  }
}
