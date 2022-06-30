var data = JSON.parse(localStorage.getItem("data"))
let search = new URLSearchParams(location.search)
let id = search.get("id")


produtoPrincipal(id)


function produtoPrincipal(id) {
    let informacao = document.getElementById("produto__principal")
    let element = data[id]
    let menorPreco = element.varegistas[melhorPreco(element)].precoNovo
    let maiorPreco = Intl.NumberFormat('pt-BR').format(element.varegistas[melhorPreco(element)].precoAntigo)
    let desconto = (100 - (element.varegistas[melhorPreco(element)].precoNovo * 100 / element.varegistas[melhorPreco(element)].precoAntigo)).toFixed()
    informacao.innerHTML +=`
    <div class="col-md-5">
        <img src="${element.imagemDoProduto}" class="card-img-top" alt="...">
    </div>
    <div class="col-md-7">
        <h4>${element.nomeDoProduto}</h4>
        <div class="price"><span class="mr-2">R$ ${Intl.NumberFormat('pt-BR').format(menorPreco)},00</span><span
            class="mr-2 cut">R$ ${maiorPreco},00</span><span class="text-success">${desconto}% OFF</span></div>
        <div class="d-flex flex-row">
            <div class="icons mr-2"><i class="fa fa-star"></i><i class="fa fa-star"></i><i
                class="fa fa-star"></i><i class="fa fa-star-half-o"></i><i class="fa fa-star-o"></i>
            </div>
            <span>${Math.floor(Math.random() * (1000 - 10 + 1) + 10)} avaliações</span>
        </div>
        <div class="d-flex align-items-center mt-4 offers mb-1"><i
            class="fa fa-check-square-o mt-1"></i><span class="ml-1">Produto com o preço mais baixo
            no momento.<br></span>
        </div>
        <div class="d-flex align-items-center offers mb-1"><i
            class="fa fa-check-square-o mt-1"></i><span class="ml-1">Frete grátis.<br></span></div>
        <div class="d-flex align-items-center offers mb-1"><i
            class="fa fa-check-square-o mt-1"></i><span class="ml-1">Produto com desconto (tempo
            limitado).<br></span>
        </div>
        <div><span class="font-weight-bold">Marca:</span><span class="ml-2">${element.fabricanteDoProduto}</span></div>
        <div class="mt-3">
            <button class="btn btn-danger mr-2" type="button">Lista de desejos</button>
            <button class="btn btn-warning" onclick="window.location.href='${element.varegistas[melhorPreco(element)].link}'" type="button">Ir ao site</button>
        </div>
    </div>
    `
}

function melhorPreco(element) {
    let menorValor
    let menorIndex
    let primeira = true
    for (i = 0; i < element.varegistas.length; i++) {
        if (primeira) {
            menorValor = element.varegistas[i].precoNovo
            menorIndex = i
            primeira = false
        }
        if (element.varegistas[i].precoNovo < menorValor) {
            menorValor = element.varegistas[i].precoNovo
            menorIndex = i
        }
    }
    return menorIndex
}