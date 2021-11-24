import { Product } from './../interfaces/product';
export const PRODUCTS: Product[] = [
  {
    prodName: "web",
    label: "Una página web",
    price: 500,
    isChecked: false,
    extras: [{
      nameXtra: "nº páginas",
      modal: "seleccione el número de páginas que componen su sitio web.",
      priceXtra: 30,
      quantity: 1,

    },
    {
      nameXtra: "nº idiomas",
      modal: "seleccione el número de idiomas al que quiere traducir su sitio web.",
      priceXtra: 30,
      quantity: 1,

    }]
  },
  {
    prodName: "seo",
    label: "Una consultoría SEO",
    price: 300,
    isChecked: false,
    extras: []
  },
  {
    prodName: "ads",
    label: "Una campaña de Google Ads",
    price: 200,
    isChecked: false,
    extras: []
  },

]
