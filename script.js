let userChoiceOutput = document.querySelector(".user-choice");
let cpuChoiceOutput = document.querySelector(".cpu-choice");

function playGame(userGuess) {

    let cpuGuess = Math.floor(Math.random() * 3) + 1;


    if(userGuess == 1){
        userChoiceOutput.innerHTML = "Rock";
    }
    if(cpuGuess == 1){
        cpuChoiceOutput.innerHTML = "Rock";
    }
    if(userGuess == 2){
        userChoiceOutput.innerHTML = "Paper";
    }
    if(cpuGuess == 2){
        cpuChoiceOutput.innerHTML = "Paper";
    }

    if(userGuess == 3){
        userChoiceOutput.innerHTML = "Scissors";
    }
    if(cpuGuess == 3)
        cpuChoiceOutput.innerHTML = "Scissors";
    


    let resultText = "";



    if (userGuess === 1 && cpuGuess === 1) {

        resultText = "Tie! Nobody won that round!";

    } else if (userGuess === 2 && cpuGuess === 1) {

        resultText = "You won! Paper beats Rock!";

    } else if (userGuess === 3 && cpuGuess === 1) {

        resultText = "You Lose! Rock beats Scissors!";

    } else if (userGuess === 2 && cpuGuess === 2) {

        resultText = "Tie! Nobody won that round!";

    } else if (userGuess === 3 && cpuGuess === 3) {

        resultText = "Tie! Nobody won that round!";

    } else if (userGuess === 2 && cpuGuess === 3) {

        resultText = "You Lose! Scissors beats Paper!";

    } else if (userGuess === 1 && cpuGuess === 2) {

        resultText = "You Lose! Paper beats Rock!";

    } else if (userGuess === 1 && cpuGuess === 3) {

        resultText = "You won! Rock beats Scissors!";

    } else if (userGuess === 3 && cpuGuess === 2) {

        resultText = "Scissors cut Paper, You Win!";

    }



    document.getElementById("result").innerText = resultText;

}
