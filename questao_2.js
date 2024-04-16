const fibonacci = (numero) => {
    let a = 0, b = 1, temp;

    for (let i = 0; b <= numero; i++) {
        if (b === numero) {
            return true;
        }
        temp = a;
        a = b;
        b = temp + b;
    }
    return false;
};

const validaSequencia = (numero) => {
    const msg = (pertence) =>
        pertence
            ? `${numero} pertence a Fibonacci`
            : `${numero} não pertence a Fibonacci`;

    console.log(msg(fibonacci(numero)));
};

process.stdout.write('Digite o número a ser verificado se pertence à sequência de Fibonacci: ')

process.stdin.once('data', (data) => {
    const numero = parseInt(data.toString().trim());
    validaSequencia(numero);
    process.exit();
});