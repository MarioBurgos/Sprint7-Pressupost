import { ProductService } from './../../services/product.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { FormControl, FormGroup, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-web-panel',
  templateUrl: './web-panel.component.html',
  styleUrls: ['./web-panel.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: WebPanelComponent
    },
  ]
})
export class WebPanelComponent implements OnInit, ControlValueAccessor {


  @Output() emitterPanel: EventEmitter<string> = new EventEmitter();

  public webProduct!: Product;
  public nPages = 1;
  public nLang = 1;

  public label = {
    pages: '',
    lang: ''
  };
  public modal = {
    pages: '',
    lang: ''
  }

  myGroup = new FormGroup({
    formPanel: new FormControl()
  });

  constructor(private productService: ProductService) {

  }
  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe(p => {
        p.find(web => web.prodName === 'web')
        this.webProduct = p[0];
        this.label = {
          pages: this.webProduct.extras[0].nameXtra,
          lang: this.webProduct.extras[1].nameXtra,
        };
        this.modal = {
          pages: this.webProduct.extras[0].modal,
          lang: this.webProduct.extras[1].modal,
        }
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
