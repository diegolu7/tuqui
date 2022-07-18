import { obtener_localStorage } from "./localStorage.js"
export default function vacio(){
  let cantidades = obtener_localStorage('cantidades');
  const even = (element) => element == 0;
  cantidades.every(even);
  console.log(cantidades);
  console.log(cantidades.some(even));
  if(cantidades.every(even)){
    alert("Esta vacio ves? no hay productos en el carro!");
  }
}