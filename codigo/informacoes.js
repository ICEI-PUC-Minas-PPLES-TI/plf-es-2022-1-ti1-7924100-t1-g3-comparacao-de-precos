var data = JSON.parse(localStorage.getItem("data"))
let search = new URLSearchParams(location.search)
let id = search.get("id")


produtoPrincipal(id)
mostrarVaregistras(id)


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

function mostrarVaregistras(id) {
    let varejo = data[id].varegistas
    let varejistas = document.getElementById("mostrar__varegistas")
    let produto = data[id]
    varejo.forEach((element, index, array) => {
        varejistas.innerHTML += `
        <div class="card card-body mt-3">
        <div
           class="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
           <div class="mr-2 mb-3 mb-lg-0">
              <img src="${produto.imagemDoProduto}" width="150" height="150" alt="">
           </div>
           <div class="media-body">
              <h6 class="media-title font-weight-semibold">
                 <a href="#" data-abc="true">${produto.nomeDoProduto}</a>
              </h6>
              <img src="imgs/${element.nome}.png" class="logo_outros" onerror="this.onerror=null; this.src='imgs/sem__foto.jpg'">
              <ul class="list-inline list-inline-dotted mb-0">
                 <li class="list-inline-item">Loja: <a href="#" data-abc="true">${element.nome}</a>
                 </li>
              </ul>
           </div>
           <div class="mt-3 mt-lg-0 ml-lg-3 text-center">
              <h3 class="mb-0 font-weight-semibold">R$ ${Intl.NumberFormat('pt-BR').format(element.precoNovo)},00</h3>
              <div>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star-half-o"></i>
              </div>
              <div class="text-muted">${Math.floor(Math.random() * (1000 - 10 + 1) + 10)} reviews</div>
              <button type="button" class="btn btn-warning mt-4 text-white"><i
                 class="icon-cart-add mr-2"></i> Ir ao site</button>
           </div>
        </div>
     </div>`
    });
}