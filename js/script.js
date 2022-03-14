document.getElementById("botaoEnviar").addEventlistener("click",validarFormulario)

  function validarFormulario() {
    if(document.getElementById("nome").value != ""  && document.getElementById("email").value !="" &&       document.getElementById("Telefone").value!=""){
     
    alert("Prontinho! Você recebera as mensagens as novidades por e-mail.")
    }else{
    alert("Por favor preencha os campos nome email")
 }
}



