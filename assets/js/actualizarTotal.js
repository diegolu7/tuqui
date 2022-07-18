import { obtener_localStorage } from "./localStorage.js";

export default function actualizaTotal($total){
  const total = document.querySelector("#total");
  const cantidades = obtener_localStorage("cantidades");
  let alimentosLS = obtener_localStorage("alimentos");

  for (let index = 0; index < cantidades.length; index++) {
    if(cantidades[index] != 0){
      // total+=cantidades[index] * alimentosLS[index].precio;
      console.log(cantidades[index]);
    }    
  }













  total.textContent ="Total: "+$total+"$";
}