function exibirProdutos(produto){
    return `Produto: ${produto.nome}, Preço: ${produto.preco.toFixed(2)}, Estoque: ${produto.estoque}`
}
let produto = {
    "preco":200,
    "nome":"pelota",
    "estoque":2
}
console.log(exibirProdutos(produto))

