import { ProductService } from '../../services/product.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Extra } from 'src/app/interfaces/extra';

@Component({
  selector: 'app-extras-panel',
  templateUrl: './extras-panel.component.html',
  styleUrls: ['./extras-panel.component.scss'],
})
export class ExtrasPanelComponent implements OnInit {

  @Input() inputExtras!: Extra [];

  constructor() { }

  ngOnInit(): void {

  }

}
