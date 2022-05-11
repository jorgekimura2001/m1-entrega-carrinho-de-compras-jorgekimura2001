const body = document.querySelector("body");

const productsCart = [
  // variavel de array de objetos de produtos
  {
    id: 1,
    nome: "desinfetante",
    preco: 20.0,
  },
  {
    id: 2,
    nome: "amaciante",
    preco: 20.0,
  },
  {
    id: 3,
    nome: "sabão em pó",
    preco: 15.9,
  },
  {
    id: 4,
    nome: "detergente",
    preco: 2.5,
  },
  {
    id: 5,
    nome: "biscoito",
    preco: 3.5,
  },
];

let soma = 0; // variavel para representar a soma total dos itens

// const div = document.createElement('div')

// div.className = 'produtosItem' --> para criar uma classe

const main = document.createElement("main"); // criando o elemento HTML MAIN

const productsList = document.createElement("ul"); // CRIANDO O ELEMENTO UL (lista não ordenada)

main.appendChild(productsList); // main (pai) --> ul (filho)

const valorFinal = document.createElement("span"); // guardar o valor da soma em uma variavel

main.appendChild(valorFinal); // main --> ul e span

function percorrerCompras(arrayProdutos) {
  // função para percorrer o array de objetos e criar li dentro da ul
  for (let i = 0; i < arrayProdutos.length; i++) {
    // += incrementar na li o nome e o preco
    productsList.innerHTML += `<li>${arrayProdutos[i].nome}</li> 
        <li>${arrayProdutos[i].preco} </li>`;
    soma += arrayProdutos[i].preco; // como o preço já é número pode se fazer a soma de maneira 'comum'
    valorFinal.innerHTML = `Total da sua compra é R$${soma}`; // span é igual ao valor da soma
  }
}
percorrerCompras(productsCart); // chamando a função, utilizando como argumento o nosso array de produtos

body.appendChild(main); // body --> main --> ul e span sendo ul pai de li

const divBotao = document.createElement('div')

divBotao.className = 'botao'

const botao = document.createElement("button"); // button

botao.innerText = "Finalizar"; // string no botão

const divSoma = document.createElement('div')

divSoma.className = 'valordasoma'

divSoma.appendChild(valorFinal)

divBotao.appendChild(botao);

body.appendChild(divSoma)

body.appendChild(divBotao)