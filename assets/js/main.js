import { data } from "./data.js";
import { guardar_localStorage, limpiar_localStorage, obtener_localStorage } from "./localStorage.js";
import cargarTienda from "./cargarTienda.js";
import agregarProducto from "./agregarProducto.js";

document.addEventListener('DOMContentLoaded', init());
function init(){
  guardar_localStorage(data,"alimentos");
  const listaTienda = document.querySelector("#lista-tienda");
  cargarTienda();
  //AGREGAR A CARRITO
  listaTienda.addEventListener('click', (e)=>{agregarProducto(e)});
}


