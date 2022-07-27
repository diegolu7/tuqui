export default function adoptar(e){
  const cliente = document.querySelector("#recipient-name");
  const email = document.querySelector("#email-name");
  const mje = document.querySelector("#message-text");
  if(cliente.value != "" && email.value != "" && mje.value != ""){
    Swal.fire({
    icon: 'success',
    title: 'Proceso de adopcion iniciado!',
    text: '🐕',
    footer: `<p>Muchas gracias por iniciar el proceso de adopción <mark>${cliente.value}</mark>. <br> Nos estaremos comunicando a su correo: <mark> ${email.value} </mark> en la brevedad.</p>`
    });
  }else{
    Swal.fire({
    icon: 'error',
    title: 'Datos Incompletos!',
    text: 'Debe completar todos los campos.',
    footer: ``
    });

  }
}