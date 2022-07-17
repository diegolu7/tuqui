import crearCard from "./crearCard.js";
import crearRow from "./crearRow.js";

export default function cargarTienda (alimentosLS){
  const tiendaUI= document.querySelector("#tienda");
  let fragment = document.createDocumentFragment();
  let unaRow = crearRow();
  let i = 0;
  alimentosLS.forEach(element => {
    i++;
    let unaCard = crearCard(element.img, element.nombre, element.descripcion, element.precio, element.id);
    console.log(element.id+1);
    unaRow.appendChild(unaCard);
    if (i % 3 === 0){
      fragment.appendChild(unaRow);
      unaRow = crearRow();
    }
  });
 console.log(fragment);
tiendaUI.appendChild(fragment);
}