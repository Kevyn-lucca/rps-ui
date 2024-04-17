//theres a bug that makes you need to press the button twice

//variables used on the script

let PlayerText = document.querySelector("#human");
let RobotText = document.querySelector("#robot");
let WinnerText = document.querySelector("#winner");
let btn = document.querySelectorAll("button");
let HumanPoints = 0;
let MachinePoints = 0;

//plays the game and compare both machine answer and player answer on button click

btn.forEach(btn =>{
    btn.addEventListener("click",() => {

        PlayerText.textContent = HumanPoints;

        RobotText.textContent = MachinePoints;
        
        PlayerPlay = btn.getAttribute("value")
        let ComputerAnswer = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

        if (PlayerPlay == 1 && ComputerAnswer === 3){
            WinnerText.textContent = "you played paper the machine played scissor machine victory, viva skynet"
            return MachinePoints++
        }
        if (PlayerPlay == 3 && ComputerAnswer === 1){
            WinnerText.textContent =  "you played scissor the machine played rock machine victory, viva skynet"
            return MachinePoints++
        }
        if (PlayerPlay == 2 && ComputerAnswer === 2){
            WinnerText.textContent = "you played rock the machine played paper machine victory, viva skynet"
            return MachinePoints++
        }
        if (PlayerPlay == 1 && ComputerAnswer === 3 ){
            WinnerText.textContent =  "you played paper the machine played scissor machine victory, viva skynet"
            return MachinePoints++
        }
        if (PlayerPlay == 3 && ComputerAnswer === 2 ){
            WinnerText.textContent =  "you played scissor the machine played paper Human victory, Humans reing supreme"
            return HumanPoints++
        }
        if (PlayerPlay == 2 && ComputerAnswer ===  3 ){
            WinnerText.textContent =  "you played rock the machine played scissor Human victory, Humans reing supreme"
            return HumanPoints++
        }
        if (PlayerPlay == 1 && ComputerAnswer === 1 ){
            WinnerText.textContent =  "you played paper the machine played rock Human victory, Humans reing supreme"
            return HumanPoints++
        }
        else if (PlayerPlay === ComputerAnswer){
            WinnerText.textContent = "its a tie"
        }

    }
)
});
