const inversaoString = (string) => {
    let novaString = '';
    //Loop percorre a string de tras pra frente into ate o primeiro caracter
    for (let i = string.length - 1; i >= 0; i--) {
        /*concatena o caracter que o loop percorrer de tras pra 
        frente na string vazia, invertendo a string*/
        novaString += string[i];
    }
    return novaString
}

process.stdout.write('Palavra ou frase a ser invertida: ');

process.stdin.once('data', (data) => {
    const string = data.toString().trim();
    const stringInvertida = inversaoString(string);
    console.log('String invertida: ', stringInvertida);
    process.exit();
});