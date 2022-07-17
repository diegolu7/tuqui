export default function crearRow(){
  const divRow = document.createElement('div');
  divRow.classList.add("row");
  divRow.classList.add("justify-content-around");
  return divRow;
}