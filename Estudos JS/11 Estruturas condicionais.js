//Fluxo de Ligações

let ligação = true
let clienteAtendeu = false

if(ligação && clienteAtendeu){
    console.log("Registrar no CRM e atualizar produtos")
}
else{
    console.log("Você é chato irmão")
}

let cicloDeVida = "Cliente"

if (cicloDeVida === "Lead"){
    console.log("Parabens, você fez contato com um novo cliente")
}else if(cicloDeVida === "Em desenvolvimento"){
    console.log("Parabens, falta pouco para virar um cliente")
}else{
    console.log("Ciclo de vida nao registrado")
}
/////////////////////////////////////////////////////////////////////////////
// Switch Case
let notaDaProva 

switch (notaDaProva){ // Define a variavel nota da prova a ser testada
    case 0: // Caso seja 0...
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Você foi reprovado :(")
        break;                 //// Se nao colocar o break ele executa tudo abaixo quando detecta true

    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        console.log("Pode seguir, você foi aprovado!!! :)))")
        break;

    default: // O que é executado caso nenhum dos casos seja verdadeiro.
        console.log("Você não fez a prova")
}
/////////////////////////////////////////////////////////////////////////////////////////
// Laço de repeticão
for(let contador = 0;contador <= 100; contador += 10){ // Define variavel e em qual numero começa, depois o escopo de ate quando ele vai reproduzir o comando e depois a taxa de incremento. Tem que se += se nao gera loop
   console.log(contador )
}

let pontosDeVida = 0

for(let i = 0; i<=12 ; i++){ // O i é em si a quantidade de vezes que o loop vai acontecer já o pontos de vida += 2 define que a cada loop vai guardar +2 na variavel.
    pontosDeVida +=2
    console.log("Contagem de loop " + i + " / Contagem de Vida " + pontosDeVida)
}

let u = 0

while(u < 3){
    console.log(u);
    u++ // nao pode esquecer do incremento se nao entra em loop
}

let contador2 = 0

do {
    console.log("Olá " + contador2) // Executa o do primeiro e so depois verifica se o while é verdadeiro ou falso. Se contador 2 for =5 ele vai falar ola e nao vai contar.
    contador2 ++
} while (contador2 < 5)