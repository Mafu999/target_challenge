const fibonacci = (numero) => {
    let a = 0, b = 1, temp;
    // itera 1 enquanto o valor de b for <= ao numero fornecido
    for (let i = 0; b <= numero; i++) {
        if (b === numero) {
            return true;
        }
        /*temporaria armazena o valor de a, atualiza o a pro valor do b
        e atualiza o b para a soma dos valores antigos de a + b*/
        temp = a;
        a = b;
        b = temp + b;
    }
    return false;
};

const validaSequencia = (numero) => {
    const msg = (pertence) =>
        //Operador ternário
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