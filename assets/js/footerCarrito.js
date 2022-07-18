export default function footerCarrito($total){
const vaciar = document.createElement("a");
const comprar = document.createElement("a");
const span = document.createElement("span");
const fragment = document.createDocumentFragment();
span.classList.add("px-1");
span.classList.add("total");
span.setAttribute("id","total");
span.textContent="Total: "+$total;
vaciar.src = "#";
vaciar.setAttribute("id","vaciar-carrito");
vaciar.classList.add("btn");
vaciar.classList.add("btn-danger");
vaciar.textContent="Vaciar Carrito";
comprar.src = "#";
comprar.setAttribute("id","vaciar-carrito");
comprar.classList.add("btn");
comprar.classList.add("btn-success");
comprar.textContent="Comprar!";
fragment.appendChild(vaciar);
fragment.appendChild(comprar);
fragment.appendChild(span);
console.log(fragment)
return fragment;

                  // <a href="#" id="vaciar-carrito" class="btn btn-danger">Vaciar Carrito</a>
                  // <a href="#" id="vaciar-carrito" class="btn btn-success">Comprar!</a>
                  // <span class="px-1 total" id="total">Total: 123$</span>
}