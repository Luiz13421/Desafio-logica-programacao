// Guardando Dados dos Pokemons
let pokemon = [
    ["Poochyena", "Level 2", "M", "13/13"],
    ["Zigzagoon", "Level 2", "F", "13/13"],
    ["Dragonite", "Level 5", "M", "25/25"],
    ["Dragonite", "Level 5", "F", "24/24"],
    ["Dragonite", "Level 5", "F", "24/24"],
    ["Poochyena", "Level 3", "F", "15/15"],
    ["Wurmple", "Level 2", "M", "7/14"],
]

//Confirmação Cadastro
console.log(pokemon[0][0] + " Cadastrado com Sucesso!")
console.log(pokemon[1][0] + " Cadastrado com Sucesso!")
console.log(pokemon[2][0] + " Cadastrado com Sucesso!")
console.log(pokemon[3][0] + " Cadastrado com Sucesso!")
console.log(pokemon[4][0] + " Cadastrado com Sucesso!")
console.log(pokemon[5][0] + " Cadastrado com Sucesso!")
console.log(pokemon[6][0] + " Cadastrado com Sucesso!")


//Selecione o seu Pokemon para checar dados ( Para trocar o pokemon, é so alterar o numero dentro do colchete para selecionar outro dentro da matriz). Primeiro é 0 e ultimo 6
let pokemonselecionado = pokemon[4]

// Mostrando dados do pokemon escolhido
console.log("Seu Pokemon selecionado é: " + pokemonselecionado[0] + " | O Nível do Pokemon é: " + pokemonselecionado[1] + " | O Sexo do Pokemon é: " + pokemonselecionado[2] + " | A Vida do seu Pokemon é: " + pokemonselecionado[3])

// Saída do Centro
pokemon = [
    ["Poochyena", "Level 2", "M", "13/13"],
    ["Zigzagoon", "Level 2", "F", "13/13"],
    ["Dragonite", "Level 5", "M", "25/25"],
    ["Dragonite", "Level 5", "F", "24/24"],
    ["Dragonite", "Level 5", "F", "24/24"],
    ["Poochyena", "Level 3", "F", "15/15"],
    ["Wurmple", "Level 2", "M", "14/14"],
]

console.log("Seu " + pokemon[0][0] + " Está Curado, Pode levá-lo")
console.log("Seu " + pokemon[1][0] + " Está Curado, Pode levá-lo")
console.log("Seu " + pokemon[2][0] + " Está Curado, Pode levá-lo")
console.log("Seu " + pokemon[3][0] + " Está Curado, Pode levá-lo")
console.log("Seu " + pokemon[4][0] + " Está Curado, Pode levá-lo")
console.log("Seu " + pokemon[5][0] + " Está Curado, Pode levá-lo")
console.log("Seu " + pokemon[6][0] + " Está Curado, Pode levá-lo")