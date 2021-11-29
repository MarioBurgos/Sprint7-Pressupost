import { ProductService } from '../../services/product.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Extra } from 'src/app/interfaces/extra';

@Component({
  selector: 'app-extras-panel',
  templateUrl: './extras-panel.component.html',
  styleUrls: ['./extras-panel.component.scss'],
})
export class ExtrasPanelComponent implements OnInit {

  @Output() emitterPanel: EventEmitter<string> = new EventEmitter();
  @Input() inputExtras!: Extra [];

  public amount = 1;

  constructor() { }

  ngOnInit(): void {

  }

  // setQuantity(evt: string) {
  //   this.inputExtra.quantity = Number(evt);
  //   console.log("Panel:// NPages: " + this.inputExtra.quantity)
  // }

}
