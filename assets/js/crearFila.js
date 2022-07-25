export default function crearFila($img,$producto,$precio,$cantidad,$id){
const tbody = document.createElement("tbody");
const tr = document.createElement("tr");
const th = document.createElement("th");
const td1 = document.createElement("td");
const td2 = document.createElement("td");
const td3 = document.createElement("td");
const Img = document.createElement("img");

Img.classList.add('card-img-top');
Img.src = $img;
Img.alt= $producto+"-IMG";

tbody.setAttribute("id", "lista-"+$id);

th.appendChild(Img);
td1.textContent=$producto;
td2.textContent=$precio+"$";
td2.setAttribute("id", "precio-"+$id);
td2.classList.add("precio-"+$id);

td3.textContent=$cantidad;
td3.setAttribute("id", "cantidad-"+$id);
td3.classList.add("cantidad-"+$id);

th.setAttribute("scope", "row" );
tr.appendChild(th);
tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
tbody.appendChild(tr);
return tbody;
}



