// Estratégia 1 para gear valores padrão

function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 4), soma1(0, 0, 0))

// estratgias 1, 2, 3 e 4 para gerar valor padrão

function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = isNaN(b) ? 1 : b
    c = 2 in arguments ? c : 1
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3),soma2(0, 0, 0))

// valor padrão ES2015

function soma3 (a = 1, b = 1, c = 1) {
    return a + b + c   
}

console.log(soma3(), soma3(3), soma3(1, 2, 3),soma3(0, 0, 0))
