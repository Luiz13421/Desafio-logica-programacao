// Pokemon
let nomePokemon
let nivelPokemon
let pontosDeVidaPokemon
let pokemonSexo
let selecionavel

// Tipos de variáveis - Javascript nao obriga a declarar o tipo da variavel ao declarar, ou seja, nao é tipado. Java e C# sao tipados.
nomePokemon = "Pikachu" // String
nivelPokemon = 20 // Number Obs. nao pode ter Aspas. Nao precisa separar em Float ou Int
pontosDeVidaPokemon = 45 // Number Obs. nao pode ter aspas
pokemonSexo = "M" // String
selecionavel = true // Boolean ( True or False)

console.log(nomePokemon + " " + nivelPokemon + " " + pontosDeVidaPokemon + " " + pokemonSexo + " " + selecionavel)

// Alterando o tipo da variável. O javascript nao reclama.
nomePokemon = 25
console.log(nomePokemon)



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Exercicio declaração de variaveis. Nome, Idade, Telefone, cpf, endereço

let nomePessoa = "Josefina serapis"
let idade = 890.5 // Nao pode ser virgula, tem que ser ponto
let telefone = "31 99453-3208" // Por padrão, quando nao vamos fazer operacoes numericas com o numero, deixamos como string
let cpf = "118.633.066-09"
let endereco = "Rua Liomeiro 176 AP 201" // nao comece variaveis com numeros, e nao coloque ç nem de espaco nem use - / ´

console.log("Ola " + nomePessoa + ", " + "sua idade é" + " " + idade + ", " + "Seu Telefone é " + telefone)
