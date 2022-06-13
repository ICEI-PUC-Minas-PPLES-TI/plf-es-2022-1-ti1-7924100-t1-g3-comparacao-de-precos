var url = window.location.href;
var res = url.slice(52)

fetch("./server.json")
.then(response => {
   return response.json();
})
.then(
   jsondata =>
   (
      document.getElementById('produto1-foto').src = jsondata.produto1.imagemDoProduto,
      document.getElementById('produto2-foto').src = jsondata.produto2.imagemDoProduto,
      document.getElementById('produto3-foto').src = jsondata.produto3.imagemDoProduto,
      document.getElementById('produto1-titulo').innerHTML = jsondata.produto1.nomeDoProduto,
      document.getElementById('produto2-titulo').innerHTML = jsondata.produto2.nomeDoProduto,
      document.getElementById('produto3-titulo').innerHTML = jsondata.produto3.nomeDoProduto,
      document.getElementById('produto1-desc').innerHTML = jsondata.produto1.descricaoDoProduto,
      document.getElementById('produto2-desc').innerHTML = jsondata.produto2.descricaoDoProduto,
      document.getElementById('produto3-desc').innerHTML = jsondata.produto3.descricaoDoProduto
   )
);

var op=res

switch (op) {
   case "produto1":
      fetch("./server.json")
         .then(response => {
            return response.json();
         })
         .then(
            jsondata =>
            (
               document.getElementById('nomeProduto').innerHTML = jsondata.produto1.nomeDoProduto,
               document.getElementById('marcaProduto').innerHTML = jsondata.produto1.fabricanteDoProduto,
               document.getElementById('descricaoDoProduto').innerHTML = jsondata.produto1.descricaoDoProduto,
               document.getElementById('foto1').src = jsondata.produto1.imagemDoProduto,
               document.getElementById('foto2').src = jsondata.produto1.imagemDoProduto,
               document.getElementById('foto3').src = jsondata.produto1.imagemDoProduto,
               document.getElementById('tag1').href = jsondata.produto1.linkDetalhes,
               document.getElementById('nomeVaregista').innerHTML = jsondata.produto1.varegistas[0].nome,
               document.getElementById('preçoAntigo').innerHTML = jsondata.produto1.varegistas[0].precoAntigo,
               document.getElementById('preçoNovo').innerHTML = jsondata.produto1.varegistas[0].precoNovo,
               document.getElementById('link').href = jsondata.produto1.varegistas[0].link,

               document.getElementById('nomeVaregista2').innerHTML = jsondata.produto1.varegistas[1].nome,
               document.getElementById('preçoAntigo2').innerHTML = jsondata.produto1.varegistas[1].precoAntigo,
               document.getElementById('preçoNovo2').innerHTML = jsondata.produto1.varegistas[1].precoNovo,
               document.getElementById('link2').href = jsondata.produto1.varegistas[1].link,

               document.getElementById('nomeVaregista3').innerHTML = jsondata.produto1.varegistas[2].nome,
               document.getElementById('preçoAntigo3').innerHTML = jsondata.produto1.varegistas[2].precoAntigo,
               document.getElementById('preçoNovo3').innerHTML = jsondata.produto1.varegistas[2].precoNovo,
               document.getElementById('link3').href = jsondata.produto1.varegistas[2].link

            )
         );
      break;
   case "produto2":
      fetch("./server.json")
         .then(response => {
            return response.json();
         })
         .then(
            jsondata =>
            (
               document.getElementById('nomeProduto').innerHTML = jsondata.produto2.nomeDoProduto,
               document.getElementById('marcaProduto').innerHTML = jsondata.produto2.fabricanteDoProduto,
               document.getElementById('descricaoDoProduto').innerHTML = jsondata.produto2.descricaoDoProduto,
               document.getElementById('foto1').src = jsondata.produto2.imagemDoProduto,
               document.getElementById('foto2').src = jsondata.produto2.imagemDoProduto,
               document.getElementById('foto3').src = jsondata.produto2.imagemDoProduto,
               document.getElementById('tag1').href = jsondata.produto2.linkDetalhes,
               document.getElementById('nomeVaregista').innerHTML = jsondata.produto2.varegistas[0].nome,
               document.getElementById('preçoAntigo').innerHTML = jsondata.produto2.varegistas[0].precoAntigo,
               document.getElementById('preçoNovo').innerHTML = jsondata.produto2.varegistas[0].precoNovo,
               document.getElementById('link').href = jsondata.produto2.varegistas[0].link,

               document.getElementById('nomeVaregista2').innerHTML = jsondata.produto2.varegistas[1].nome,
               document.getElementById('preçoAntigo2').innerHTML = jsondata.produto2.varegistas[1].precoAntigo,
               document.getElementById('preçoNovo2').innerHTML = jsondata.produto2.varegistas[1].precoNovo,
               document.getElementById('link2').href = jsondata.produto2.varegistas[1].link,

               document.getElementById('nomeVaregista3').innerHTML = jsondata.produto2.varegistas[2].nome,
               document.getElementById('preçoAntigo3').innerHTML = jsondata.produto2.varegistas[2].precoAntigo,
               document.getElementById('preçoNovo3').innerHTML = jsondata.produto2.varegistas[2].precoNovo,
               document.getElementById('link3').href = jsondata.produto2.varegistas[2].link
            )
         );
      break;
   case "produto3":
      fetch("./server.json")
         .then(response => {
            return response.json();
         })
         .then(
            jsondata =>
            (
               document.getElementById('nomeProduto').innerHTML = jsondata.produto3.nomeDoProduto,
               document.getElementById('marcaProduto').innerHTML = jsondata.produto3.fabricanteDoProduto,
               document.getElementById('descricaoDoProduto').innerHTML = jsondata.produto3.descricaoDoProduto,
               document.getElementById('foto1').src = jsondata.produto3.imagemDoProduto,
               document.getElementById('foto2').src = jsondata.produto3.imagemDoProduto,
               document.getElementById('foto3').src = jsondata.produto3.imagemDoProduto,
               document.getElementById('tag1').href = jsondata.produto3.linkDetalhes,
               document.getElementById('nomeVaregista').innerHTML = jsondata.produto3.varegistas[0].nome,
               document.getElementById('preçoAntigo').innerHTML = jsondata.produto3.varegistas[0].precoAntigo,
               document.getElementById('preçoNovo').innerHTML = jsondata.produto3.varegistas[0].precoNovo,
               document.getElementById('link').href = jsondata.produto3.varegistas[0].link,

               document.getElementById('nomeVaregista2').innerHTML = jsondata.produto3.varegistas[1].nome,
               document.getElementById('preçoAntigo2').innerHTML = jsondata.produto3.varegistas[1].precoAntigo,
               document.getElementById('preçoNovo2').innerHTML = jsondata.produto3.varegistas[1].precoNovo,
               document.getElementById('link2').href = jsondata.produto3.varegistas[1].link,

               document.getElementById('nomeVaregista3').innerHTML = jsondata.produto3.varegistas[2].nome,
               document.getElementById('preçoAntigo3').innerHTML = jsondata.produto3.varegistas[2].precoAntigo,
               document.getElementById('preçoNovo3').innerHTML = jsondata.produto3.varegistas[2].precoNovo,
               document.getElementById('link3').href = jsondata.produto3.varegistas[2].link

            )
         );
      break;
}



$(function(){ 

   $("#filtro").click(function(){
      $("#produtos").css('display','block');
   });
   $("#fechar").click(function(){
      $("#produtos").css('display','none');
   })
 
   $("#filtro").keyup(function(){
     var texto = $(this).val();
     
     $(".bloco").each(function(){
       var resultado = $(this).text().toUpperCase().indexOf(' '+texto.toUpperCase());
       
       if(resultado < 0) {
         $(this).fadeOut();
       }else {
         $(this).fadeIn();
       }
     }); 
 
   });
   
 });
