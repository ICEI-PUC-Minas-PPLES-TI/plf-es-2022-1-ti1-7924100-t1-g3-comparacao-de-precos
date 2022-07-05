let usuario = document.getElementById("usuario__aparecer")
let estaLogado = localStorage.getItem("log")

if (estaLogado) {
    usuario.innerHTML += `
    <span>${estaLogado}</span>`
} else {
    usuario.innerHTML +=`
    <div><a href="/login.html">Cadastre-se</a></div> 
    <div><a href="/login.html">Entrar</a></div>`
}

