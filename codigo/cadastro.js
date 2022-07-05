function leDados () {
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse (strDados);
    }
    else {
        objDados = { cadastros: [ 
                        {   
                            "nomeDoProduto": "MacBook Pro de 13 polegadas – Prateado",
                            "fabricanteDoProduto": "Apple",
                            "descricaoDoProduto": "Chip M1 da Apple com CPU de 8 núcleos, GPU de 8 núcleos e Neural Engine de 16 núcleos",
                            "imagemDoProduto": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-silver-select-202011_GEO_BR?wid=640&hei=595&fmt=jpeg&qlt=95&.v=1632950237000",
                            "linkDetalhes": "produto.html",
                            "varegistas": [
                                { "nome": "Americanas", "precoNovo": 15400, "precoAntigo": 16395, "link": "#" , "foto": "#"},
                                { "nome": "Submarino", "precoNovo": 13600, "precoAntigo": 16395, "link": "#" , "foto": "#" },
                                { "nome": "Mercado Livre", "precoNovo": 15300, "precoAntigo": 16395, "link": "#" , "foto": "#" },
                                { "nome": "Pichau", "precoNovo": 16100, "precoAntigo": 16395, "link": "#" , "foto": "#" }
                            ]
                        }
                    ]}
        salvaDados(objDados);
    }

    return objDados;
}

var ab = JSON.parse(localStorage.getItem('db'));


function salvaDados (dados) {
    localStorage.setItem ('db', JSON.stringify (dados));
}


function incluirCadastro (){
    // Ler os dados do localStorage
    let objDados = leDados();

    // Incluir um novo cadastro
    let strNomeDoProduto = document.getElementById ('campoNomeDoProduto').value;
    let strFabricanteDoProduto = document.getElementById ('campoFabricanteDoProduto').value;
    let strDescricaoDoProduto = document.getElementById ('campoDescricaoDoProduto').value;
    let strImagemDoProduto = document.getElementById ('campoImagemDoProduto').value;
    let strLinkDetalhes = document.getElementById ('campoLinkDetalhes').value;
    let strVaregistasNome = document.getElementById ('campoVaregistasNome').value;
    let strVaregistasPrecoNovo = document.getElementById ('campoVaregistasPrecoNovo').value;
    let strVaregistasPrecoAntigo = document.getElementById ('campoVaregistasPrecoAntigo').value;
    let strVaregistasLink = document.getElementById ('campoVaregistasLink').value;
    let strVaregistasFoto = document.getElementById ('campoVaregistasFoto').value;
    let strVaregistasNome2 = document.getElementById ('campoVaregistasNome2').value;
    let strVaregistasPrecoNovo2 = document.getElementById ('campoVaregistasPrecoNovo2').value;
    let strVaregistasPrecoAntigo2 = document.getElementById ('campoVaregistasPrecoAntigo2').value;
    let strVaregistasLink2 = document.getElementById ('campoVaregistasLink2').value;
    let strVaregistasFoto2 = document.getElementById ('campoVaregistasFoto2').value;
    let strVaregistasNome3 = document.getElementById ('campoVaregistasNome3').value;
    let strVaregistasPrecoNovo3 = document.getElementById ('campoVaregistasPrecoNovo3').value;
    let strVaregistasPrecoAntigo3 = document.getElementById ('campoVaregistasPrecoAntigo3').value;
    let strVaregistasLink3 = document.getElementById ('campoVaregistasLink3').value;
    let strVaregistasFoto3 = document.getElementById ('campoVaregistasFoto3').value;
    let strVaregistasNome4 = document.getElementById ('campoVaregistasNome4').value;
    let strVaregistasPrecoNovo4 = document.getElementById ('campoVaregistasPrecoNovo4').value;
    let strVaregistasPrecoAntigo4 = document.getElementById ('campoVaregistasPrecoAntigo4').value;
    let strVaregistasLink4 = document.getElementById ('campoVaregistasLink4').value;
    let strVaregistasFoto4 = document.getElementById ('campoVaregistasFoto4').value;
    let strVaregistasNome5 = document.getElementById ('campoVaregistasNome5').value;
    let strVaregistasPrecoNovo5 = document.getElementById ('campoVaregistasPrecoNovo5').value;
    let strVaregistasPrecoAntigo5 = document.getElementById ('campoVaregistasPrecoAntigo5').value;
    let strVaregistasLink5 = document.getElementById ('campoVaregistasLink5').value;
    let strVaregistasFoto5 = document.getElementById ('campoVaregistasFoto5').value;
    let strVaregistasNome6 = document.getElementById ('campoVaregistasNome6').value;
    let strVaregistasPrecoNovo6 = document.getElementById ('campoVaregistasPrecoNovo6').value;
    let strVaregistasPrecoAntigo6 = document.getElementById ('campoVaregistasPrecoAntigo6').value;
    let strVaregistasLink6 = document.getElementById ('campoVaregistasLink6').value;
    let strVaregistasFoto6 = document.getElementById ('campoVaregistasFoto6').value;
    
    novoCadastro = {
        nomeDoProduto: strNomeDoProduto,
        fabricanteDoProduto: strFabricanteDoProduto,
        descricaoDoProduto: strDescricaoDoProduto,
        imagemDoProduto: strImagemDoProduto,
        linkDetalhes: strLinkDetalhes,
        varegistas: []
    };

    //Adiciona varegistas (os campos 2, 3, 4 e 5 adicionam apenas se tiver)
    var arraynew ={"nome": strVaregistasNome, "precoNovo": strVaregistasPrecoNovo, "precoAntigo": strVaregistasPrecoAntigo, "link": strVaregistasLink, "foto": strVaregistasFoto};
    novoCadastro['varegistas'].push(arraynew);

    if (strVaregistasNome2){
        var arraynew2 ={"nome": strVaregistasNome2, "precoNovo": strVaregistasPrecoNovo2, "precoAntigo": strVaregistasPrecoAntigo2, "link": strVaregistasLink2, "foto": strVaregistasFoto2};
        novoCadastro['varegistas'].push(arraynew2);
    }

    if (strVaregistasNome3){
        var arraynew3 ={"nome": strVaregistasNome3, "precoNovo": strVaregistasPrecoNovo3, "precoAntigo": strVaregistasPrecoAntigo3, "link": strVaregistasLink3, "foto": strVaregistasFoto3};
        novoCadastro['varegistas'].push(arraynew3);
    }

    if (strVaregistasNome4){
        var arraynew4 ={"nome": strVaregistasNome4, "precoNovo": strVaregistasPrecoNovo4, "precoAntigo": strVaregistasPrecoAntigo4, "link": strVaregistasLink4, "foto": strVaregistasFoto4};
        novoCadastro['varegistas'].push(arraynew4);
    }

    if (strVaregistasNome5){
        var arraynew5 ={"nome": strVaregistasNome5, "precoNovo": strVaregistasPrecoNovo5, "precoAntigo": strVaregistasPrecoAntigo5, "link": strVaregistasLink5, "foto": strVaregistasFoto5};
        novoCadastro['varegistas'].push(arraynew5);
    }

    if (strVaregistasNome6){
        var arraynew6 ={"nome": strVaregistasNome6, "precoNovo": strVaregistasPrecoNovo6, "precoAntigo": strVaregistasPrecoAntigo6, "link": strVaregistasLink6, "foto": strVaregistasFoto6};
        novoCadastro['varegistas'].push(arraynew6);
    }
    


    objDados.cadastros.push (novoCadastro);

    // Salvar os dados no localStorage novamente
    salvaDados (objDados);

    // Atualiza os dados da tela
    imprimeDados ();
}

function imprimeDados () {
    let tela = document.getElementById('tela');
    let strHtml = '';
    let objDados = leDados ();

    for (i=0; i< objDados.cadastros.length; i++) {
        strHtml += `<div class="row">
        <div class="col-sm-12">
            <table id="grid-contatos" class="table table-striped">
                <thead>
                    <tr>
                    
                        <th scope="col">${objDados.cadastros[i].nomeDoProduto}</th>
                        <th scope="col">${objDados.cadastros[i].fabricanteDoProduto}</th>
                        <th scope="col">${objDados.cadastros[i].descricaoDoProduto}</th>
                        <th scope="col">${objDados.cadastros[i].imagemDoProduto}</th>
                        <th scope="col">${objDados.cadastros[i].linkDetalhes}</th>
                        
                       
                    </tr>
                </thead>
                <tbody id="table-contatos">
                    <tr>
                        
                       
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
    </div>`
        
        
        
        
    
        
    }

    tela.innerHTML = strHtml;
}

// Configura os botões
document.getElementById ('btnCarregaDados').addEventListener ('click', imprimeDados);
document.getElementById ('btnIncluirCadastro').addEventListener ('click', incluirCadastro);


