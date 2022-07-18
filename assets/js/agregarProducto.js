import actualizarCarrito from "./actualizarCarrito.js";
import actualizaTotal from "./actualizarTotal.js";
import crearFila from "./crearFila.js";
import { guardar_localStorage, limpiar_localStorage, obtener_localStorage } from "./localStorage.js";
import sumarCompra from "./sumarCompra.js";

export default function agregarProducto(e){
  e.preventDefault();
  const carritoDOM = document.querySelector("#lista-carrito");
  const $id = e.target.value;
  const alimentosLS = obtener_localStorage("alimentos");
  const cantidades = obtener_localStorage("cantidades");

  if(!isNaN($id)){
    if(cantidades[$id] == 0){
    cantidades[$id] = cantidades[$id] +1;
    const fila = crearFila(alimentosLS[$id].img, alimentosLS[$id].nombre, alimentosLS[$id].precio, cantidades[$id],$id);
    carritoDOM.appendChild(fila);
    }else{
    cantidades[$id] = cantidades[$id] +1;
    const UIcantidad = document.querySelector("#cantidad-"+$id);
    const UIprecio = document.querySelector("#precio-"+$id);
    UIcantidad.textContent=cantidades[$id];

    UIprecio.textContent=cantidades[$id] * alimentosLS[$id].precio;
    }

  actualizaTotal();
  guardar_localStorage(cantidades,"cantidades");
  }
  const numeroProductos = sumarCompra(cantidades);
  actualizarCarrito(numeroProductos);
}


