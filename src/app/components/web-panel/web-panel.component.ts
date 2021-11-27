import { ProductService } from './../../services/product.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Extra } from 'src/app/interfaces/extra';

@Component({
  selector: 'app-web-panel',
  templateUrl: './web-panel.component.html',
  styleUrls: ['./web-panel.component.scss'],
  providers: [
  ]
})
export class WebPanelComponent implements OnInit {


  @Output() emitterPanel: EventEmitter<string> = new EventEmitter();

public webExtras: Extra[] = [];
  public nPages = 1;
  public nLang = 1;

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.productService.getWebExtras()
      .subscribe(extras => this.webExtras = extras);
  }

  getNPages(evt: string){
    this.nPages = Number(evt);
    console.log("Panel:// NPages: " + this.nPages)
  }
  getNLanguages(evt: string){
    this.nLang = Number(evt);
    console.log("Panel:// NLang: " + this.nLang)
  }

  calcPanelPrice(): string {
    let result = this.nPages * this.nLang * 30;
    return String(result);
  }

  emitOnChanges() {
    console.log("Panel emitter:// Result: " + this.calcPanelPrice());
    this.emitterPanel.emit(this.calcPanelPrice());
  }

}
