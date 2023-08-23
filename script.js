let computerScore = 0;
let playerScore = 0;

let rockButton = document.querySelector('.rock');
let scissorsButton = document.querySelector('.scissors');
let paperButton = document.querySelector('.paper');

let startWinLoseMessage = document.querySelector('.start-resultWinLose');
let rulesAndResult = document.querySelector('.rules-resultInfo');

let playerChoiceImage = document.querySelector('.playerChoice');
let playerScorePage = document.querySelector('.playerScore');
let computerChoiceImage = document.querySelector('.computerChoice');
let computerScorePage = document.querySelector('.computerScore');

let endgameMessage = document.querySelector('.endgameMessage');
let restartButton = document.querySelector('.restart');
let overlay = document.getElementById('overlay');

rockButton.addEventListener('click', () => checkButton("rock"));
paperButton.addEventListener('click', () => checkButton("paper"));
scissorsButton.addEventListener('click', () => checkButton("scissors"));
restartButton.addEventListener('click', () => restartGame());
overlay.addEventListener('click', () => deactivateOverlay());


function getComputerChoice()
{
   let choice = Math.floor(Math.random() * 3) + 1; 

   if (choice === 1)
   {
    return "rock";
   }
   else if (choice === 2)
   {
    return "paper";
   }
   else
   {
    return "scissors";
   }
}

function playRound(playerChoice, computerChoice)
{
    if (playerChoice === "rock")
    {
        if (computerChoice === "rock")
        {
            return "Fate has been delayed!";
        }
        else if (computerChoice === "paper")
        {
            computerScore++;
            return "Paper has wrapped Rock.";
        }
        else 
        {
            playerScore++;
            return "Rock has crushed Scissors!";
        }
    }

    else if (playerChoice === "paper")
    {
        if (computerChoice === "paper")
        {
            return "That was tense!";
        }
        else if (computerChoice === "scissors")
        {
            computerScore++;
            return "Scissors has sliced Paper!";
        }
        else 
        {
            playerScore++;
            return "Paper has enveloped Rock!";
        }
    }

    else  // Scissors === playerChoice
    {
        if (computerChoice === "scissors")
        {
            return "A stand still!";
        }
        else if (computerChoice === "rock")
        {
            computerScore++;
            return "Rock demolished Scissors!";
        }
        else 
        {
            playerScore++;
            return "Scissors has sliced Paper!";
        }
    }

}


function checkButton(playerChoice)
{
    if (checkGameEnd())
    {
        activateOverlay();
        return;
    }

    let computerChoice = getComputerChoice();
    let roundResult = playRound(playerChoice, computerChoice);
    updateScreen(roundResult, playerChoice, computerChoice);

    if (checkGameEnd())
    {
        activateOverlay();
        return;
    }
}

function updateScreen(result, playerChoice, computerChoice)
{
    rulesAndResult.textContent = result;
    playerScorePage.textContent = "Player Score: " + playerScore;
    computerScorePage.textContent = "Computer Score: " + computerScore;

    if (playerChoice === "rock")
    {
        if (computerChoice === "paper")
        {
            startWinLoseMessage.textContent = "Computer has won the round.";
            playerChoiceImage.textContent = String.fromCodePoint(0x1FAA8);
            computerChoiceImage.textContent = String.fromCodePoint(0x1F4F0);
        }
        else if(computerChoice === "scissors")
        {
            startWinLoseMessage.textContent = "You have won the round.";
            playerChoiceImage.textContent = String.fromCodePoint(0x1FAA8);
            computerChoiceImage.textContent = String.fromCodePoint(0x2702);
        }
        else
        {
            startWinLoseMessage.textContent = "Round Tied!";
            playerChoiceImage.textContent = String.fromCodePoint(0x1FAA8);
            computerChoiceImage.textContent = String.fromCodePoint(0x1FAA8);
        }
    }

    else if (playerChoice === "paper")
    {
        if (computerChoice === "rock")
        {
            startWinLoseMessage.textContent = "You have won the round.";
            playerChoiceImage.textContent = String.fromCodePoint(0x1F4F0);
            computerChoiceImage.textContent = String.fromCodePoint(0x1FAA8);
        }
        else if(computerChoice === "scissors")
        {
            startWinLoseMessage.textContent = "Computer has won the round.";
            playerChoiceImage.textContent = String.fromCodePoint(0x1F4F0);
            computerChoiceImage.textContent = String.fromCodePoint(0x2702);
        }
        else
        {
            startWinLoseMessage.textContent = "Round Tied!";
            playerChoiceImage.textContent = String.fromCodePoint(0x1F4F0);
            computerChoiceImage.textContent = String.fromCodePoint(0x1F4F0);
        }
    }

    else //playerChoice === scissors 
    {
        if (computerChoice === "rock")
        {
            startWinLoseMessage.textContent = "Computer has won the round.";
            playerChoiceImage.textContent = String.fromCodePoint(0x2702);
            computerChoiceImage.textContent = String.fromCodePoint(0x1FAA8);
        }
        else if(computerChoice === "paper")
        {
            startWinLoseMessage.textContent = "You have won the round.";
            playerChoiceImage.textContent = String.fromCodePoint(0x2702);
            computerChoiceImage.textContent = String.fromCodePoint(0x1F4F0);
        }
        else
        {
            startWinLoseMessage.textContent = "Round Tied!";
            playerChoiceImage.textContent = String.fromCodePoint(0x2702);
            computerChoiceImage.textContent = String.fromCodePoint(0x2702);
        }
    }
}

function checkGameEnd()
{
    let result = playerScore === 5 || computerScore === 5;

    if (result)
    {
        if (computerScore > playerScore)
        {
            endgameMessage.textContent = "You Lose!";
            return result;
        }
        else 
        {
            endgameMessage.textContent = "You Win!";
            return result;
        }
    }
    return result;
}

function activateOverlay()
{
    overlay.classList.add('overlayActive');
}

function deactivateOverlay()
{
    overlay.classList.remove('overlayActive');
}

function restartGame()
{
    computerScore = 0;
    playerScore = 0;
    startWinLoseMessage.textContent = "Are you ready?";
    rulesAndResult.textContent = "The first one to five wins the game!";
    playerChoiceImage.textContent = String.fromCodePoint(0x2753);
    playerScorePage.textContent = "Player Score: 0";
    computerChoiceImage.textContent = String.fromCodePoint(0x2753);
    computerScorePage.textContent = "Computer Score: 0";
    deactivateOverlay();
}
