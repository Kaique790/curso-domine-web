let valor
console.log(valor)

valor = null
console.log(valor)

// console.log(valor.toString()) // erro!

const produto = {}
console.log(produto.preco)
console.log(typeof produto)

produto.preco = undefined
console.log (!!produto.preco)
console.log (produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)