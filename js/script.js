function validarLogin(){
    const inputEmail = document.getElementById("campo_email")
    const inputSenha = document.getElementById("campo_senha")
    if (inputEmail.value !=="A@A" || inputSenha.value !== "B"){
        alert("E-mail ou Senha incorretos!")
    }else{
        var token = Math.random().toString(36).substring(2);

        localStorage.setItem("token", token)
        botao_entrar = window.open("~/../index.html")
    }
}
function sair(){
    btn_sair = window.open("~/../login.html")
}

function mostrarNome(nomeUsuario){
    document.write("Olá ", nomeUsuario, ", seja bem-vinda!")
}

const $html = document.querySelector('html')
const $checkbox =  document.addEventListener('change',function(){
    $html.classList.toggle('dark_mode')
})