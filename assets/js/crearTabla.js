export default function crearTabla(){
const thead = document.createElement("thead");
const tr = document.createElement("tr");
const th1 = document.createElement("th");
const th2 = document.createElement("th");
const th3 = document.createElement("th");
const th4 = document.createElement("th");
const tabla = document.createElement("table");

tabla.classList.add("table");
tabla.classList.add("u-full-width");
tabla.setAttribute("id","carrito1");






th1.setAttribute("scope", "col" );
th1.textContent="Imagen";
th2.setAttribute("scope", "col" );
th2.textContent="Nombre";
th3.setAttribute("scope", "col" );
th3.textContent="Precio($)";
th4.setAttribute("scope", "col" );
th4.textContent="Cantidad";
tr.appendChild(th1);
tr.appendChild(th2);
tr.appendChild(th3);
tr.appendChild(th4);
thead.appendChild(tr);

tabla.appendChild(thead);
return tabla;
}



