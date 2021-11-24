import { Extra } from "./extra";

export interface Product {

  prodName: string;
  label: string;
  price: number;
  isChecked: boolean;
  extras: Extra[];

  getExtrasPrice(): number;
}
