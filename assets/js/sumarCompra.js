export default  function sumarCompra(array_numeros){
  let suma = 0;
  array_numeros.forEach (function(numero){
    suma += numero;
  });
  return suma;
}