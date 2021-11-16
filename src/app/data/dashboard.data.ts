export const DASHBOARD_DATA = {
  title: "Calculadora de presupuestos",
  preamble: "Esta página web ha sido desarrollada como ejercicio del curso de Frontend con Angular de la ITAcademy, subvencionado por Barcelona Activa y se trata de una aplicación para calcular presupuestos de desarrollo de páginas web.",
  generalFunctioning: "Los datos se renderizan de manera reactiva en función de las opciones que escoja el usuario.",
  modelDescription: "Para el funcionamiento de la aplicación se ha decidido crear un modelo de datos 'Product' el cual tiene los atributos de tipo string 'name' y 'description', un atributo de tipo number 'price' y por último un atributo booleano 'isChecked' que indica si el producto ha sido seleccionado para el presupuesto.",
  homeComponentFuncionting: "El componente Home, al cual se accede clicando en el botón que hay más abajo en esta misma página, muestra un título y una serie de checkboxes que se cargan recorriendo un loop ngFor en un array de productos que se reciben mediante un servicio; y que, al seleccionarse (las checkboxes), añaden o sustraen el precio de cada servicio del precio total. Cabe mencionar que cada checkbox, a su vez, es un componente hijo del Home Component que detecta si ha sido seleccionado y se comunica con el componente padre que es el que se encarga de realizar las operaciones en el precio total. ",
  checkboxComponentFunctioning: "Como se ha comentado anteriormente, cada checkbox y su label forman parte de un componente.  Su funcionamiento es simple, el componente recibe un [input] de tipo Product.  Luego carga los atributos 'product.description' y 'product.price' en su label y con un método 'toggleCheck()' emite un output a su padre para que sea conocedor de si ha sido seleccionado o no.",
  panelComponentFunctioning: "El componente PanelComponent, se muestra únicamente si el usuario selecciona el checkbox relacionado con la creación de una página web.  En su interior contiene un componente hijo 'InputWithButtonsComponent' que es el que determina cuántas páginas/idiomas desea el usuario incluir en el presupuesto.  PanelComponent actúa como intermediario entre este último InputWButtonsComponent y HomeComponent.",
  inputWithButtonsComponent: "El componente InputWButtonsComponent está pensado para gestionar el número de páginas e idiomas que se quiere presupuestar en el desarrollo de una página web, aunque en realidad valdría para cualquier operación en la que se quiera transmitir un valor numérico.  Recibe un [input] de la descripción (label) y emite un output con el valor que hay en el cuadro de texto (no permite valores inferiores a 1), cada vez que se produce un cambio. Los botones aumentan o disminuyen ese valor.",
  closing: "Para ver el funcionamiento completo de la aplicación, pulse el botón a continuación:"

}