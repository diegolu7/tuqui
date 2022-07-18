export default function buscador(e){
  //card-title
  let lista = document.querySelectorAll(".card");
    lista.forEach( card=>{
      card.textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
      ?card.classList.remove("ocultar")
      :card.classList.add("ocultar");
  });
  //mensajeError();
}
