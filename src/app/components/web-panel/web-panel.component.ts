import { ProductService } from './../../services/product.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-web-panel',
  templateUrl: './web-panel.component.html',
  styleUrls: ['./web-panel.component.scss']
})
export class WebPanelComponent implements OnInit {


  @Output() emitterPanel: EventEmitter<string> = new EventEmitter();

  public webProduct!: Product;
  public nPages = 1;
  public nLang = 1;

  public label = {
    pages: ``,
    lang: ``,
  }

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe(p => {
        p.find(web => web.prodName === 'web')
        this.webProduct = p[0];
        console.log(this.webProduct)
      });

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
