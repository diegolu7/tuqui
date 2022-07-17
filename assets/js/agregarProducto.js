import actualizarCarrito from "./actualizarCarrito.js";
import crearFila from "./crearFila.js";
import { guardar_localStorage, limpiar_localStorage, obtener_localStorage } from "./localStorage.js";
import sumarCompra from "./sumarCompra.js";

export default function agregarProducto(e){
  e.preventDefault();
  const carritoDOM = document.querySelector("#lista-carrito");
  const $id = e.target.value;
  const alimentosLS = obtener_localStorage("alimentos");
  const cantidades = obtener_localStorage("cantidades");

  console.log(cantidades);

  //debo pregunta si ese ID ya esta en el dom
  //SI -> SUMO CANTIDAD
  //NO -> AGREGO AL DOM!
  if(!isNaN($id)){
    if(cantidades[$id] == 0){
    const fila = crearFila(alimentosLS[$id].img, alimentosLS[$id].nombre, alimentosLS[$id].precio, cantidades[$id]+1,$id);
    carritoDOM.appendChild(fila);
    }else{
    
    }
  cantidades[$id] = cantidades[$id] +1;

  guardar_localStorage(cantidades,"cantidades");
  }
  const numeroProductos = sumarCompra(cantidades);
  actualizarCarrito(numeroProductos);
}



//NO ESTOY PODIENDO SELECCIONAR EL CAMPO PARA ACTUALIZAR LA CANTIDAD!