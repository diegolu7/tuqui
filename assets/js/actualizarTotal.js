import { obtener_localStorage } from "./localStorage.js";

export default function actualizaTotal(){
  let total = document.querySelector("#total");
  const cantidades = obtener_localStorage("cantidades");
  const alimentosLS = obtener_localStorage("alimentos");
  let precio = 0;
  let acu = 0;
  for (let index = 0; index < cantidades.length; index++) {
    acu = parseInt(cantidades[index],10) * parseInt(alimentosLS[index].precio,10); 
    precio = precio + acu;
    //console.log(precio);
  }


//parseInt(string, base)








  

  total.textContent ="Total: "+precio+"$";
}