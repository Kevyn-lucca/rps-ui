// essa função deve pegar o valor de um dos tres botões apertados.

function GetPlayerAnswer(){

}

//Computer picks between(paper, rock and scissor)

function GetComputerAnswer(){
    let ComputerAnswer = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    if (ComputerAnswer == 1){
        return ComputerAnswer  = "rock"
    }
    if(ComputerAnswer == 2){
        return ComputerAnswer = "paper"
    }
    else {
        return ComputerAnswer = "scissor"
    }
}

//Players answer and variables

let PlayerPlay = GetPlayerAnswer();
let ComputerPlay = GetComputerAnswer();
let HumanPoints = 0;
let MachinePoints = 0;


//plays the game and compare both machine answer and player answer

//essa função deve ser iniciada a partir de um evento de click

function PlayGame(PlayerPlay,ComputerPlay){
        if (PlayerPlay == "paper" && ComputerPlay == "scissor"){
            console.log (`you played ${PlayerPlay} the machine played ${ComputerPlay} machine victory, viva skynet`)
            return MachinePoints++
        }
        if (PlayerPlay == "scissor" && ComputerPlay == "rock"){
            console.log (`you played ${PlayerPlay} the machine played ${ComputerPlay} machine victory, viva skynet`)
            return MachinePoints++
        }
        if (PlayerPlay == "rock" && ComputerPlay == "paper"){
            console.log (`you played ${PlayerPlay} the machine played ${ComputerPlay} machine victory, viva skynet`)
            return MachinePoints++
        }
        if (PlayerPlay == "paper" && ComputerPlay == "scissor"){
            console.log (`you played ${PlayerPlay} the machine played ${ComputerPlay} machine victory, viva skynet`)
            return MachinePoints++
        }
        if (PlayerPlay == "scissor" && ComputerPlay == "paper"){
            console.log (`you played ${PlayerPlay} the machine played ${ComputerPlay} Human victory, Humans reing supreme`)
            return HumanPoints++
        }
        if (PlayerPlay == "rock" && ComputerPlay == "scissor"){
            console.log (`you played ${PlayerPlay} the machine played ${ComputerPlay} Human victory, Humans reing supreme`)
            return HumanPoints++
        }
        if (PlayerPlay == "paper" && ComputerPlay == "rock"){
            console.log (`you played ${PlayerPlay} the machine played ${ComputerPlay} Human victory, Humans reing supreme`)
            return HumanPoints++
        }
        else if (PlayerPlay === ComputerPlay) {
            console.log (`you played ${PlayerPlay} the machine played ${ComputerPlay} its a tie`)

    }

}

//O resultado da partida deve aparecer na tela

console.log(PlayGame(PlayerPlay,ComputerPlay));