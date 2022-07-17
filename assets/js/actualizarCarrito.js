export default function actualizarCarrito(cantidadProductos){
  const carritoNumero = document.querySelector("#navbarSupportedContent > ul > li.nav-item.mx-4.submenu > a")
  carritoNumero.textContent = "CARRITO("+cantidadProductos+")";
}