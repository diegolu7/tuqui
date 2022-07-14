export function guardar_localStorage(objeto,llave){
  //convierte OBJ -> string y guardo
  localStorage.setItem(llave,JSON.stringify(objeto));
}

export function obtener_localStorage(llave){
  if(localStorage.getItem(llave)){
    let obj = JSON.parse(localStorage.getItem(llave));
    return obj;
  }else{
    console.log("no hay datos cargados en localstorage");
  }
}
export function limpiar_localStorage(clave){
  //REMOVER DE LOCAL STORAGE
  localStorage.removeItem(clave);
  return console.log("se removio"+clave);
}