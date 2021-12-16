import { Product } from './../../interfaces/product';
import { ProductService } from './../../services/product.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Extra } from 'src/app/interfaces/extra';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent implements OnInit {

  fgInfo: FormGroup;
  EXTRAS_WEB: Extra[] = [
    {
      name: "pages",
      label: "nº de páginas",
      modal: "seleccione el número de páginas que componen su sitio web.",
      price: 30,
      quantity: 1,
    },
    {
      name: "languages",
      label: "nº idiomas",
      modal: "seleccione el número de idiomas al que quiere traducir su sitio web.",
      price: 30,
      quantity: 1,
    },
  ]

  constructor(
    private _fb: FormBuilder
    ) {



      //crear form
    this.fgInfo = this._fb.group({
      fcName: ['', Validators.required],
      fcEmail: ['', Validators.compose([ Validators.required])],    //Validators.email,
      fcCheck: [false, Validators.min(1)],
      fgExtras: this._fb.group({
        fcpages: ['', Validators.pattern('^[1-9][0-9]*$')], //no está en camelCase porque en el componente se bindea 'fc'+{{extra.name}}
        fclanguages: ['', Validators.pattern('^[1-9][0-9]*$')]
      })
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
