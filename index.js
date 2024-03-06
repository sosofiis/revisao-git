// Criar algoritmo que verifica a idade e valide a necessidade de uma pessoa de votar
// Não possui idade
// Obrigatório 
// Facultativo

// Declarações
const nome = "Getúlio";
let idade = 18;

// Desenvolvimento
// menor que 16 não vota
// igual a 16/17 voto facultativo
// maior que 18 obrigatório
// a partir de 65 facultativo

if(idade < 16){
    console.log(nome + " não tem idade para votar!");
} else if(idade >= 16 && idade < 18 || idade >= 65){
    console.log(nome + " seu voto é facultativo!");
} else{
    console.log(nome + " seu voto é obrigatório!");
}

// Informar o nome e a classificação de obrigatoriedade de votar
