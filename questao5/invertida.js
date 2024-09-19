const stringOriginal = "Exemplo de string";
let stringInvertida = "";
let i = stringOriginal.length - 1;

// Inversão da string sem uso de função
while (i >= 0) {
    stringInvertida += stringOriginal[i];
    i--;
}

console.log("String invertida:", stringInvertida);
