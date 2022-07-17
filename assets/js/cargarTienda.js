import crearCard from "./crearCard.js";
import crearRow from "./crearRow.js";
import { guardar_localStorage, limpiar_localStorage, obtener_localStorage } from "./localStorage.js";
export default function cargarTienda (){
  const alimentosLS = obtener_localStorage("alimentos");
  const tiendaUI= document.querySelector("#lista-tienda");
  let fragment = document.createDocumentFragment();
  let unaRow = crearRow();
  let i = 0;
  alimentosLS.forEach(element => {
    i++;
    let unaCard = crearCard(element.img, element.nombre, element.descripcion, element.precio, element.id);
    unaRow.appendChild(unaCard);
    if (i % 3 === 0){ //set cantidad por fila
      fragment.appendChild(unaRow);
      unaRow = crearRow();
    }
  });
tiendaUI.appendChild(fragment);
}