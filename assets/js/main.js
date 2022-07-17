import { data } from "./data.js";
import { guardar_localStorage, limpiar_localStorage, obtener_localStorage } from "./localStorage.js";
import cargarTienda from "./cargarTienda.js";

window.addEventListener('DOMContentLoaded', init());

function init(){
  guardar_localStorage(data,"alimentos");
  cargarTienda();
  //AGREGAR A CARRITO

}

