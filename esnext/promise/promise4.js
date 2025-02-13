function gerarNumerosEntre(min, max, tempo) {
    if (min > max) {
        [max, min] = [min, max]
    };

    return new Promise(resolve => {
        setTimeout(() => {
            const fator = max - min + 1
            const random = parseInt(Math.random() * fator) + min;
            resolve(random)
        }, tempo);
    });

};

function gerarVariosNumeros(){
    return Promise.all([
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 2000),
        gerarNumerosEntre(1, 60, 300),
        gerarNumerosEntre(1, 60, 1500)
    ]);
};

console.time('promise');

gerarVariosNumeros()
    .then(numeros => console.log(numeros))
    .then(()=> {
        console.timeEnd('promise');
    });

