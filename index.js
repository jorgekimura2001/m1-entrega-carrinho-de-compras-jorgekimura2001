const body = document.querySelector('body')

const productsCart = [ // variavel de array de objetos de produtos
    {
        id: 1,
        nome: "desinfetante",
        preco: 20.00,
    },
    {
        id: 2,
        nome: 'amaciante',
        preco: 20.00 
    },
    {
        id: 3,
        nome: 'sabão em pó',
        preco: 15.90
    },
    {
        id: 4,
        nome: 'detergente',
        preco: 2.50
    },
    {
        id: 5,
        nome: 'biscoito',
        preco: 3.50 
    }
]

let soma = 0 // variavel para representar a soma total dos itens

// const div = document.createElement('div')

// div.className = 'produtosItem' --> para criar uma classe

const main = document.createElement('main')

const productsList = document.createElement('ul')

main.appendChild(productsList)

const valorFinal = document.createElement('span')

main.appendChild(valorFinal)

function percorrerCompras (arrayProdutos){
    for(let i = 0; i < arrayProdutos.length; i++){    // percorreu o array e criou li 
        productsList.innerHTML += `<li>Nome: ${arrayProdutos[i].nome}</li> 
        <li> Valor: ${arrayProdutos[i].preco} </li>`
        soma += arrayProdutos[i].preco 
        valorFinal.innerHTML = `${soma}`
    }
}
percorrerCompras(productsCart)

body.appendChild(main)

const botao = document.createElement('button') // button

botao.innerText = 'Finalizar' // string no botão

document.body.appendChild(botao)

