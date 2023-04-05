// Dupla: Jaci Verheij e Lucas de Paula

function validarLogin(){
    const inputEmail = document.getElementById("campo_email")
    const inputSenha = document.getElementById("campo_senha")
    if (inputEmail.value !=="A@A" || inputSenha.value !== "B"){
        alert("E-mail ou Senha incorretos!")
    }else{
        var token = Math.random().toString(36).substring(2);

        localStorage.setItem("token", token)
        window.open("~/../index.html")
        window.close()

    }
}

function sair(){
    window.open("~/../login.html")
    localStorage.removeItem('token') 
    window.close()

}

function mostrarNome(nomeUsuario){
    document.write("Olá ", nomeUsuario, ", seja bem-vindos!")
}



var count = 0

$(function(){
    let task_list = $(".task_list")
    $("#myForm").submit(function(event){
        let valuesInForm = $(this).serializeArray()
        console.table(valuesInForm)
        if(count <= 6){
            $("#taskTable").append('<tr> <td>' + valuesInForm[0].value + '</td>' + 
            '<td>' + valuesInForm[1].value + '</td>' +
            '<td>' + valuesInForm[2].value + '</td> </tr>')

            $('#myForm').each (function(){
                this.reset();
              })

        }else{
            alert("O limite foi atingido")
        }
        count += 1
        event.preventDefault();
    })
})