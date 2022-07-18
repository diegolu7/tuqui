import { data } from "./data.js";
import { guardar_localStorage, limpiar_localStorage, obtener_localStorage } from "./localStorage.js";
import cargarTienda from "./cargarTienda.js";
import agregarProducto from "./agregarProducto.js";
import vaciarCarrito from "./vaciarCarrito.js";
import buscador from "./buscador.js";
import vacio from "./vacio.js";

document.addEventListener('DOMContentLoaded', init());
function init(){
  guardar_localStorage(data,"alimentos");
  let stockList= new Array(data.length).fill(0);
  guardar_localStorage(stockList,"cantidades");

  const listaTienda = document.querySelector("#lista-tienda");
  const UIvaciarCarrito = document.querySelector("#vaciar-carrito");
  cargarTienda();
  //AGREGAR A CARRITO
  listaTienda.addEventListener('click', (e)=>{agregarProducto(e)});
  //VACIAR CARRITO
  UIvaciarCarrito.addEventListener('click', (e)=>{
    e.preventDefault();
    vacio();
    vaciarCarrito(e);
  });
  //BTN finalizar compra
  const btnFinal = document.querySelector("#finalizar-carrito");
  btnFinal.addEventListener('click', (e)=> {
    e.preventDefault();
    let arrayCarrito = obtener_localStorage('cantidades');
    let res = arrayCarrito.find(element => element >= 1);
    if(res){
      alert("Gracias por su compra! 🐕");
      window.location.reload(true);
    }else{
      alert("Tu carrito esta vacio! 🐕");
    }
  })
  //FILTRADO
  const filtro = document.querySelector("#filter-cards");
  filtro.addEventListener('keyup',(e)=> buscador(e));
}