import { ExtrasPanelComponent } from './../../components/extras-panel/extras-panel.component';
import { OrderService } from './../../services/order.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from './../../services/product.service';
import { Product } from './../../interfaces/product';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {

  @ViewChild(ExtrasPanelComponent) panel!: ExtrasPanelComponent;

  public form = this.formBuilder.group({
    fcProduct: [false],
    fgExtras: this.formBuilder.group({
      //los siguientes no están en camelCase porque en el html se bindea a "'fc'+{{extra.name}}" y el extra.name está en small caps
      fcpages: ['', Validators.compose([Validators.pattern('^[1-9][0-9]*$'), Validators.min(1)])],
      fclanguages:  ['', Validators.compose([Validators.pattern('^[1-9][0-9]*$'), Validators.min(1)])],
    }),
  });

  public products: Product[] = []; //Array para mostrarlos
  public customerName!: string;
  public orderPrice = 0;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private orderService: OrderService,
  ) {
  }

  ngOnInit(): void {
    //obtener los datos de los mocks mediante servicio
    this.getProducts();
  }

  /**funcion que llama al servicio que trae los productos montados con sus extras*/
  getProducts(): void {
    this.products = this.productService.getProducts();
    console.log("HomeComponent");
    console.log(this.products);
  }
  getOrderPrice(): void {
    this.orderPrice = this.orderService.getOrder().totalPrice;
  }

  saveOrder() {
    this.orderService.saveOrder(this.customerName);
    // this.form.reset();

  }

}
