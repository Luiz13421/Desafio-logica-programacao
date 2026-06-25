// AND ( && )
let idade = 18
let vistoVerificado = true
let resultado = (idade >= 18) && (vistoVerificado === true) 
console.log(resultado)


// OR ( || )
let vidaMinima = 15
let pokemonMachucado = true
let podeEntrarCentro = (vidaMinima<=15) || (pokemonMachucado === true)
console.log("O Pokemon Pode Entrar no centro? " + podeEntrarCentro)

// OR ( || ) - nosso boneco só pode sair se tiver sem chuva OU com guarda Chuva
let tempo = "chuva"
let item = "guarda chuva"
let podeSair = (tempo !== "chuva") || (item === "guarda chuva")
console.log("nosso personagem pode sair ? " + podeSair)

// NOT  ( !) - nega uma afirmação
let tempoNegacao = "chuva"
let horario = 8
let resultadoNegacao = !((tempo !== "chuva") && (horario > 6)) // Exclamacao antes faz a variavel que seria false virar true
console.log(resultado)