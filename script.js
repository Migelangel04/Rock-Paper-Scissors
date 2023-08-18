window.addEventListener('click', function(e) {
let playerInitialInput = e.target.getAttribute('class');
game(playerInitialInput);
})


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
            return "Paper has wrapped Rock.";
        }
        else 
        {
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
            return "Scissors has sliced Paper!";
        }
        else 
        {
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
            return "Rock demolished Scissors!";
        }
        else 
        {
            return "Scissors has sliced Paper!";
        }
    }

}


function game(playerInitialInput)
{
    let playerCounter = 0;
    let computerCounter = 0;

    while(playerCounter < 5 && computerCounter < 5)
    {
        if(playerCounter === 0 && computerCounter === 0)
        {
            let computerChoice = getComputerChoice();
            let playerChoice = playerInitialInput;
            let resultOfRound = playRound(playerChoice, computerChoice);
    
            if (resultOfRound.includes("Lose"))
            {
                computerCounter++;
                document.querySelector('.start-resultWinLose').innerText = "You Lose the round :(";
                document.querySelector('.rules-resultInfo').innerText = resultOfRound;

                document.querySelector('.playerScore').innerText = "Player Score: " + playerCounter;
                document.querySelector('.computerScore').innerText = "Computer Score: " + computerCounter;

                if (computerChoice === "rock" || playerChoice === "rock")
                {
                    if (computerChoice === "rock")
                    {
                        document.querySelector(".computerChoice").innerText = String.fromCodePoint(0x1FAA8);
                    }
                    if (playerChoice === "rock")
                    {
                        document.querySelector(".playerChoice").innerText = String.fromCodePoint(0x1FAA8);
                    }
                }
                if (computerChoice === "paper" || playerChoice === "paper")
                {
                    if (computerChoice === "paper")
                    {
                        document.querySelector(".computerChoice").innerText = String.fromCodePoint(0x1F4F0);
                    }
                    if (playerChoice === "paper")
                    {
                        document.querySelector(".playerChoice").innerText = String.fromCodePoint(0x1F4F0);
                    }
                }
                if (computerChoice === "scissors" || playerChoice === "scissors")
                {
                    if (computerChoice === "scissors")
                    {
                        document.querySelector(".computerChoice").innerText = String.fromCodePoint(0x2702);
                    }
                    if (playerChoice === "scissors")
                    {
                        document.querySelector(".playerChoice").innerText = String.fromCodePoint(0x2702);
                    }
                }
            }
            else if (resultOfRound.includes("Win"))
            {
                playerCounter++;
                document.querySelector('.start-resultWinLose').innerText = "You Win the round :)";
                document.querySelector('.rules-resultInfo').innerText = resultOfRound;

                document.querySelector('.playerScore').innerText = "Player Score: " + playerCounter;
                document.querySelector('.computerScore').innerText = "Computer Score: " + computerCounter;

                if (computerChoice === "rock" || playerChoice === "rock")
                {
                    if (computerChoice === "rock")
                    {
                        document.querySelector(".computerChoice").innerText = String.fromCodePoint(0x1FAA8);
                    }
                    if (playerChoice === "rock")
                    {
                        document.querySelector(".playerChoice").innerText = String.fromCodePoint(0x1FAA8);
                    }
                }
                if (computerChoice === "paper" || playerChoice === "paper")
                {
                    if (computerChoice === "paper")
                    {
                        document.querySelector(".computerChoice").innerText = String.fromCodePoint(0x1F4F0);
                    }
                    if (playerChoice === "paper")
                    {
                        document.querySelector(".playerChoice").innerText = String.fromCodePoint(0x1F4F0);
                    }
                }
                if (computerChoice === "scissors" || playerChoice === "scissors")
                {
                    if (computerChoice === "scissors")
                    {
                        document.querySelector(".computerChoice").innerText = String.fromCodePoint(0x2702);
                    }
                    if (playerChoice === "scissors")
                    {
                        document.querySelector(".playerChoice").innerText = String.fromCodePoint(0x2702);
                    }
                }
            }
            else 
            {
                document.querySelector('.start-resultWinLose').innerText = "The round is a tie. Go again";
                document.querySelector('.rules-resultInfo').innerText = resultOfRound;

                document.querySelector('.playerScore').innerText = "Player Score: " + playerCounter;
                document.querySelector('.computerScore').innerText = "Computer Score: " + computerCounter;

                if (computerChoice === "rock" || playerChoice === "rock")
                {
                    if (computerChoice === "rock")
                    {
                        document.querySelector(".computerChoice").innerText = String.fromCodePoint(0x1FAA8);
                    }
                    if (playerChoice === "rock")
                    {
                        document.querySelector(".playerChoice").innerText = String.fromCodePoint(0x1FAA8);
                    }
                }
                if (computerChoice === "paper" || playerChoice === "paper")
                {
                    if (computerChoice === "paper")
                    {
                        document.querySelector(".computerChoice").innerText = String.fromCodePoint(0x1F4F0);
                    }
                    if (playerChoice === "paper")
                    {
                        document.querySelector(".playerChoice").innerText = String.fromCodePoint(0x1F4F0);
                    }
                }
                if (computerChoice === "scissors" || playerChoice === "scissors")
                {
                    if (computerChoice === "scissors")
                    {
                        document.querySelector(".computerChoice").innerText = String.fromCodePoint(0x2702);
                    }
                    if (playerChoice === "scissors")
                    {
                        document.querySelector(".playerChoice").innerText = String.fromCodePoint(0x2702);
                    }
                }
            }
        }

        else 
        {
            window.addEventListener('click', function(e)
            {
                let computerChoice = getComputerChoice();
                let playerChoice = e.target.getAttribute('class');
                let resultOfRound = playRound(playerChoice, computerChoice);
        
                if (resultOfRound.includes("Lose"))
                {
                    computerCounter++;
                    document.querySelector('.start-resultWinLose').innerText = "You Lose the round :(";
                    document.querySelector('.rules-resultInfo').innerText = resultOfRound;

                    document.querySelector('.playerScore').innerText = "Player Score: " + playerCounter;
                    document.querySelector('.computerScore').innerText = "Computer Score: " + computerCounter;

                    if (computerChoice === "rock" || playerChoice === "rock")
                    {
                        if (computerChoice === "rock")
                        {
                            document.querySelector(".computerChoice").innerText = String.fromCodePoint(0x1FAA8);
                        }
                        if (playerChoice === "rock")
                        {
                            document.querySelector(".playerChoice").innerText = String.fromCodePoint(0x1FAA8);
                        }
                    }
                    if (computerChoice === "paper" || playerChoice === "paper")
                    {
                        if (computerChoice === "paper")
                        {
                            document.querySelector(".computerChoice").innerText = String.fromCodePoint(0x1F4F0);
                        }
                        if (playerChoice === "paper")
                        {
                            document.querySelector(".playerChoice").innerText = String.fromCodePoint(0x1F4F0);
                        }
                    }
                    if (computerChoice === "scissors" || playerChoice === "scissors")
                    {
                        if (computerChoice === "scissors")
                        {
                            document.querySelector(".computerChoice").innerText = String.fromCodePoint(0x2702);
                        }
                        if (playerChoice === "scissors")
                        {
                            document.querySelector(".playerChoice").innerText = String.fromCodePoint(0x2702);
                        }
                    }
                }
                else if (resultOfRound.includes("Win"))
                {
                    playerCounter++;
                    document.querySelector('.start-resultWinLose').innerText = "You Win the round :)";
                    document.querySelector('.rules-resultInfo').innerText = resultOfRound;

                    document.querySelector('.playerScore').innerText = "Player Score: " + playerCounter;
                    document.querySelector('.computerScore').innerText = "Computer Score: " + computerCounter;

                    if (computerChoice === "rock" || playerChoice === "rock")
                    {
                        if (computerChoice === "rock")
                        {
                            document.querySelector(".computerChoice").innerText = String.fromCodePoint(0x1FAA8);
                        }
                        if (playerChoice === "rock")
                        {
                            document.querySelector(".playerChoice").innerText = String.fromCodePoint(0x1FAA8);
                        }
                    }
                    if (computerChoice === "paper" || playerChoice === "paper")
                    {
                        if (computerChoice === "paper")
                        {
                            document.querySelector(".computerChoice").innerText = String.fromCodePoint(0x1F4F0);
                        }
                        if (playerChoice === "paper")
                        {
                            document.querySelector(".playerChoice").innerText = String.fromCodePoint(0x1F4F0);
                        }
                    }
                    if (computerChoice === "scissors" || playerChoice === "scissors")
                    {
                        if (computerChoice === "scissors")
                        {
                            document.querySelector(".computerChoice").innerText = String.fromCodePoint(0x2702);
                        }
                        if (playerChoice === "scissors")
                        {
                            document.querySelector(".playerChoice").innerText = String.fromCodePoint(0x2702);
                        }
                    }
                }
                else 
                {
                    document.querySelector('.start-resultWinLose').innerText = "The round is a tie. Go again";
                    document.querySelector('.rules-resultInfo').innerText = resultOfRound;

                    document.querySelector('.playerScore').innerText = "Player Score: " + playerCounter;
                    document.querySelector('.computerScore').innerText = "Computer Score: " + computerCounter;

                    if (computerChoice === "rock" || playerChoice === "rock")
                    {
                        if (computerChoice === "rock")
                        {
                            document.querySelector(".computerChoice").innerText = String.fromCodePoint(0x1FAA8);
                        }
                        if (playerChoice === "rock")
                        {
                            document.querySelector(".playerChoice").innerText = String.fromCodePoint(0x1FAA8);
                        }
                    }
                    if (computerChoice === "paper" || playerChoice === "paper")
                    {
                        if (computerChoice === "paper")
                        {
                            document.querySelector(".computerChoice").innerText = String.fromCodePoint(0x1F4F0);
                        }
                        if (playerChoice === "paper")
                        {
                            document.querySelector(".playerChoice").innerText = String.fromCodePoint(0x1F4F0);
                        }
                    }
                    if (computerChoice === "scissors" || playerChoice === "scissors")
                    {
                        if (computerChoice === "scissors")
                        {
                            document.querySelector(".computerChoice").innerText = String.fromCodePoint(0x2702);
                        }
                        if (playerChoice === "scissors")
                        {
                            document.querySelector(".playerChoice").innerText = String.fromCodePoint(0x2702);
                        }
                    }
                }
            })
        } 
    }

    

}