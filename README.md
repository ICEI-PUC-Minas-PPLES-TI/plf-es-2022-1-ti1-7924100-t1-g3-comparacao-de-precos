<!--- [![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=7564031&assignment_repo_type=AssignmentRepo) -->
# Informações do Projeto
## Best Option
O objetivo do nosso projeto é auxiliar as pessoas em pesquisas de preços online antes de realizar uma compra.

## Curso
Engenharia de Software

## Alunos integrantes da Equipe

* André Eller Pereira Mendonça
* Gabriel Peçanha Santiago
* Gustavo Andrade Alves
* Henrique Santana Diniz
* Pedro Henrique Baroni Neves
* Vitor Lany Freitas Ferreira

## Professores Responsáveis

* Felipe Augusto Lara Soares
* Johnatan Alves de Oliveira
* Rommel Vieira Carneiro
* Roberto Felipe Dias Ferreira da Rocha
* Simone de Assis Alves da Silva

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Alunos Integrantes da Equipe](#alunos-integrantes-da-equipe)
  - [Professores Responsáveis](#professores-responsáveis)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas e Mapas de Empatia](#personas-e-mapas-de-empatia)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)

# Introdução
<!-- Deve arbordar: Problema, Objetivos, Justificativa, Público alvo -->

## Problema

> Existe uma variedade de preços em um mesmo produto que é vendido por diferentes lojas, fazendo com que o consumidor acabe pagando mais caro sem necessidade

## Objetivos

> Criar um site que tenha a função de facilitar a pesquisa do usuário para achar o produto de forma fácil e rápido e com melhor preço

## Justificativa

> Além dos diferentes preços, muitas lojas oferecem produtos com descontos falsos e preços abusivos

## Público alvo

> Qualquer pessoa que usa a internet para fazer compras online

# Especificações do Projeto
## Personas e Mapas de Empatia
### Persona: Antônio
- **Idade:** 40 anos
- **Hobby:** Sair com amigos ou família 
- **Trabalho:** Gerente
- **Personalidade:** Homem de família, gosta de passear com os filhos
- **Sonhos:** Viajar para a Europa
- **Objetivo e lugares:** Antônio utiliza seu cartão de crédito para fazer compras online através do computador ou celular, geralmente em datas comemorativas para presentear amigos e família. Busca seus produtos em redes sociais e lojas virtuais 
- **Objetivos chave:** Comprar pelo melhor preço e juntar milhas para viajar
- **O que ele pensa e sente?** Preocupação em economizar e com o futuro dos filhos
- **O que ele vê?** Amigos do trabalho, vizinhos, filhos e amigos da família
- **O que ele diz e faz?** Utiliza roupas sociais durante o trabalho e roupas casuais quando está junto da família e amigos, respeita e trata o próximo educadamente
- **O que ele ouve?** Experiência de amigos e familiares, avaliação de produtos e influenciadores digitais
- **Dores:** Pouca visibilidade de promoções de milhas, quitar dívidas, gerenciar grande número de empregados
- **Ganhos:** Economizar dinheiro para viajar no final do ano e adquirir milhas

### Persona: Mateus
- **Idade:** 22 anos
- **Hobby:** Futebol
- **Trabalho:** Estagiário 
- **Personalidade:** Jovem adulto, carismático, gosta de se divertir com o que compra
- **Sonhos:** Comprar o primeiro carro 
- **Objetivo e lugares:** Mateus faz compras através do cartão de crédito e também dinheiro físico, sem datas específicas. Busca seus produtos em lojas de esporte físicas e sites online
- **Objetivos chave:** Economizar em compras de eletrodomésticos para seu apartamento
- **O que ele pensa e sente?** Conseguir um produto de qualidade por um bom preço e sempre buscar pela melhor oportunidade
- **O que ele vê?** Influenciadores digitais, amigos do trabalho, faculdade e online
- **O que ele diz e faz?** Se contenta com sua compra
- **O que ele ouve?** Reviews de produto e recomendações de amigos
- **Dores:** Pagar caro em um produto que poderia ter sido mais barato
- **Ganhos:** Conseguir o produto desejado a um preço justo

## Histórias de usuários:
Eu, como Antônio, costumo usar bastante o cartão de crédito para compras na internet, preciso saber as melhores promoções com milhas para viajar no fim do ano.

Eu, como Mateus, faço compras pela internet e desejo saber sobre as promoções antes de realizar uma compra, para não ser enganado com descontos falsos.

## Requisitos
### Requisitos funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Ter uma categoria de produtos em destaque | MÉDIA | 
|RF-002| O menu deve apresentar um botão para entrar no grupo de descontos   | MÉDIA |
|RF-003| O sistema deve mostrar o produto pesquisado de diferentes lojas online   | ALTA |
|RF-004| O sistema deve ter um filtro de produtos por preço   | MÉDIA |
|RF-005| O usuário deve fazer um cadastro no site   | MÉDIA |
|RF-006| O site deve notificar o usuário quando acontecer uma promoção   | MÉDIA |
|RF-007| Cada produto mostrado deve ter a opção de visualizar ele no site original em que ele está sendo vendido   | ALTA |
|RF-008| Os destaques deve mostrar os produtos da semana   | MÉDIA |
|RF-009| Colocar cards com a foto e o nome do produto  | MÉDIA |
|RF-010| Filtro para determinar se deve mostrar produtos com cash back e milhas   | BAIXA |
|RF-011| Barra de pesquisa para procurar algum determinado produto  | ALTA |
|RF-012| Cada produto deve ter um histórico do seu preço nas últimas semanas  | MÉDIA |

### Requisitos não funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve ficar disponível 99% do tempo | ALTA | 
|RNF-002| Se o grupo de descontos estiver cheio deve ficar inacessível | BAIXA | 
|RNF-003| O site deve ter suporte a língua portuguesa | MÉDIA | 
|RNF-004| O filtro de preços deve ter a possibilidade de olhar por ordem crescente e decrescente | MÉDIA | 
|RNF-005| O site deve ser compatível com celular | ALTA | 
|RNF-006| O site deve ser compatível com tablet | ALTA | 
|RNF-007| O site deve ser compatível com os navegadores | ALTA | 
|RNF-008| O site deve ser feito com as ferramentas HTML, CSS e JavaScript | MÉDIA | 
|RNF-009| O site deve armazenar o CEP de um usuário cadastrado |  BAIXA | 
|RNF-010| O site deve armazenar o preço do produto para seu histórico | MÉDIA | 
|RNF-011| O site deve armazenar o email cadastrado para poder mandar notificações | MÉDIA | 
|RNF-012| O site deve armazenar o histórico de pesquisas do dia do usuário |  BAIXA | 

## Restrições

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não trabalhar com produtos de supermercado            |
|03| Não trabalhar com preços de gasolina                  |

# Projeto de Interface
## Wireframe
![wireframe](https://media.discordapp.net/attachments/961281775273902132/966054615944675408/unknown.png?width=572&height=467)

## Fluxo de usuário
![userflow](https://media.discordapp.net/attachments/961281775273902132/967047071477678110/unknown.png)

# Metodologia - Gestão do projeto

## Divisão de Papéis 
* André Eller Pereira Mendonça:
* Gabriel Peçanha Santiago: Página de login
* Gustavo Andrade Alves: Sistema mostrar produtos de diversas lojas e filtro de preços
* Henrique Santana Diniz: Aba de destaques
* Pedro Henrique Baroni Neves: 
* Vitor Lany Freitas Ferreira: Prototipação da interface e desenvolvimento da página de especificação do produto

## Ferramentas
### Ferramentas de Gerência de Projeto
> Trello - Para tarefas

> Miro - Organização de ideias

### Ferramentas de Gerência de Versões
> Github

### Comunicação do Grupo
> Whatsapp - Para discussões rápidas

> Discord - Para reuniões online

## Controle de Versão
