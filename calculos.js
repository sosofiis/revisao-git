// exercícios de operações de cálculos

const num1 = 236;
const num2 = 95;

// soma

let soma = num1 + num2;

console.log("Resultado: ", soma);

// tem o mesmo resultado mas chama a variável de uma forma diferente:
// console.log(`Resultado: ${soma}`);

// subtração

let subtracao = num1 - num2;

console.log("Resultado: ", subtracao);

// multiplicação

let multiplicacao = num1 * num2;

console.log("Resultado: ", multiplicacao);

// divisão

let divisao = num1 / num2;

console.log("Resultado: ", divisao);

// definir se os números são pares ou impar

// let num1ParouImpar = num1 % 2;
// let num2ParouImpar = num2 % 2;

if(num1 % 2 === 0){
    console.log("Número 1 é par");
} else{
    console.log("Número 1 é impar ");
}

if(num2 % 2 === 0){
    console.log("Número 2 é par");
} else{
    console.log("Número 2 é impar ");
}
