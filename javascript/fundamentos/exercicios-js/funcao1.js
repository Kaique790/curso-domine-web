// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log (a + b)
}

imprimirSoma(2, 3)
imprimirSoma (2)
imprimirSoma(2, 10, 3, 5, 6)
imprimirSoma()

// Funcao com retorno

function soma(a, b = 0) {
    return a + b
};

console.log(soma(2, 3));
console.log(soma (2));
console.log(soma ());
console.log(soma(10, 30));

function conta(a, b = 2) {
    console.log(a - b)
};

conta(20, 10);
