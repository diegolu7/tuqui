import crearTabla from "./crearTabla.js";
import { guardar_localStorage, limpiar_localStorage, obtener_localStorage } from "./localStorage.js";
export default function vaciarCarrito(e){
  e.preventDefault();
  const UIcarrito = document.querySelector("#mi-lista-carrito");//**** */
  const cantidades = obtener_localStorage("cantidades");
  const alimentosLS = obtener_localStorage("alimentos");
  // //FALTA ELIMINAR DEL DOM!
  
  // UIcarrito.remove();
  // idCarrito.appendChild(footerCarrito("100"));
  //padre.insertBefore(agregado,referencia);
  
for (let index = 0; index < cantidades.length; index++) {
    if(cantidades[index] != 0){
    const eliminar = document.querySelector("#lista-"+index);
    eliminar.remove()
  }
}
  
  
  let stockList= new Array(alimentosLS.length).fill(0);
  guardar_localStorage(stockList,"cantidades");
}