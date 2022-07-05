if (!localStorage.getItem("usuarios")) {
    let usuarios = []
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
}

var usuarios = JSON.parse(localStorage.getItem("usuarios"))

function criarConta() {
    let usuario = document.getElementById("criar__usuario").value
    let email = document.getElementById("criar__email").value
    let confirmarEmail = document.getElementById("criar__confirmar__email").value
    let senha = document.getElementById("criar__senha").value

    if (email == confirmarEmail) {
        let novoUsuario = {"usuario": usuario, "email": email, "senha": senha}
        usuarios.push(novoUsuario)
        localStorage.setItem("usuarios", JSON.stringify(usuarios))
    } else {
        alert("Conmfirme seu e-mail")
    }
}

function entrarNaConta() {
    let email = document.getElementById("entrar__email").value
    let senha = document.getElementById("entrar__senha").value
    usuarios.forEach((element, index, array) => {
        if (element.email == email) {
            if (element.senha == senha) {
                window.location = `/home.html?user=${element.usuario}`
            }
        }
    })
}