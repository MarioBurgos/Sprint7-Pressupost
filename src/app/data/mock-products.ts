import { Product } from './../interfaces/product';
export const PRODUCTS: Product[] = [
  {
    prodName: "web",
    label: "Una página web",
    price: 500,
    isChecked: false,
    extras: ['páginas', 'idiomas']
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
