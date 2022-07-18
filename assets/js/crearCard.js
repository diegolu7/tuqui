export default function crearCard($imgsrc,$titulo,$desc,$precio,$id){
  const divCard = document.createElement('div');
  const divImg = document.createElement('img');
  const divBody = document.createElement('div');
  const h5 = document.createElement('h5');
  const pDesc = document.createElement('p');
  const pPrecio = document.createElement('p');
  const btn = document.createElement('button');
  const i = document.createElement('i');

  divCard.classList.add("card");
  divCard.classList.add("col-sm");
  divCard.style.width = '18rem'; //VERIFICAR
  divCard.setAttribute("id", $id );
  
  divImg.classList.add('card-img-top');
  divImg.src = $imgsrc;
  divImg.alt= $titulo;

  divBody.classList.add("card-body");

  h5.classList.add("card-title");
  h5.classList.add("text-center");
  h5.textContent = $titulo.toUpperCase();

  pDesc.classList.add("card-text");
  pDesc.textContent = $desc;

  pPrecio.classList.add("card-text");
  pPrecio.textContent = $precio+" $";

  btn.classList.add("btn");
  btn.classList.add("btn-primary");
  btn.classList.add("agregar-carrito");
  btn.setAttribute("button", "button" );
  btn.textContent = "Agregar al carrito 🛒";
  btn.setAttribute("id",$id);
  btn.setAttribute("value",$id);
  btn.classList.add("ov-btn-slide-left");/**/


  // i.classList.add("fa-solid");
  // i.classList.add("fa-cart-shopping");
  // i.setAttribute("value",$id);

  // btn.appendChild(i);

  divBody.appendChild(h5);
  divBody.appendChild(pDesc);
  divBody.appendChild(pPrecio);
  divBody.appendChild(btn);

  divCard.appendChild(divImg);
  divCard.appendChild(divBody);
return divCard;
}
