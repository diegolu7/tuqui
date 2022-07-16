import { guardar_localStorage, limpiar_localStorage, obtener_localStorage } from "./localStorage.js";
import { data } from "./data.js";
window.addEventListener('DOMContentLoaded', init());




function init(){
  guardar_localStorage(data,"alimentos");
  const alimentosLS = obtener_localStorage("alimentos");
  cargarTienda(alimentosLS);
  //console.log(alimentosLS);
}

