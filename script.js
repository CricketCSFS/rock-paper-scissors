function getComputerChoice() {
    let choice;
    let random = Math.floor(Math.random() * 100);

    if (random <= 33) {
        choice = "rock";
    } else if (random <= 66) {
        choice = "paper";
    } else if (random <= 100) {
        choice = "scissors";
    }

    return choice;
}

function getHumanChoice() {
    let choice = prompt("Type: Rock || Paper || Scissors");
    return choice.toLowerCase();
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        switch(true) {
            case (humanChoice === "paper" && computerChoice === "rock"):
                ++humanScore;
                break;
            case (humanChoice === "rock" && computerChoice === "scissors"):
                ++humanScore;
                break;
            case (humanChoice === "scissors" && computerChoice === "paper"):
                ++humanScore;
                break;
            case (computerChoice === "paper" && humanChoice === "rock"):
                ++computerScore;
                break;
            case (computerChoice === "rock" && humanChoice === "scissors"):
                ++computerScore;
                break;
            case (computerChoice === "scissors" && humanChoice === "paper"):
                ++computerScore;
                break;
            default:
                console.log("TIE!");
        }
    
        console.log("Computer: " + computerScore)
        console.log("You: " + humanScore)
    }

    let roundsPlayed = 1;

    while (roundsPlayed < 6) {
        console.warn("ROUND: " + roundsPlayed);

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log("Computer chose: " + computerSelection);
        console.log("You chose: " + humanSelection);

        playRound(humanSelection,computerSelection);

        ++roundsPlayed;
    }

    console.warn("RESULTS:")
    if (humanScore > computerScore) {
        console.log("YOU WON!!!")
    } else if (computerScore > humanScore) {
        console.log("You lost, refresh to try again.")
    } else if (humanScore === computerScore) {
        console.log("Woah you tied - Refresh to try again!")
    }
}

playGame();