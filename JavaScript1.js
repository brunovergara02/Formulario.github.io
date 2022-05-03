function Enviar() {
var nome = document.getElementById("nomeid");
var senha = document.getElementById("senhaid");
if(nome.value == ""||senha.value == ""){
    alert('Obrigatório o preenchimento dos campos')
}else{
    var nome = document.getElementById("nomeid");

    if (nome.value != "teste"||senha.value != "teste") {
        alert('Usuário e/ou senha incorretos');
    }else{
        alert('Login realizado com sucesso');
    }

}
}