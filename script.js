



















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

function playAround(playerChoice, computerChoice)
{
    if (playerChoice === "rock")
    {
        if (computerChoice === "rock")
        {
            return "Tied Game! Go again.";
        }
        else if (computerChoice === "paper")
        {
            return "You Lose! Paper beats Rock.";
        }
        else 
        {
            return "You Win! Congrats";
        }
    }

    else if (playerChoice === "paper")
    {
        if (computerChoice === "paper")
        {
            return "Tied Game! Go again.";
        }
        else if (computerChoice === "scissors")
        {
            return "You Lose! Scissors beats Paper.";
        }
        else 
        {
            return "You Win! Congrats";
        }
    }

    else  // Scissors === playerChoice
    {
        if (computerChoice === "scissors")
        {
            return "Tied Game! Go again.";
        }
        else if (computerChoice === "rock")
        {
            return "You Lose! Rock beats Scissors.";
        }
        else 
        {
            return "You Win! Congrats";
        }
    }

}

function game()
{
    let userCounter = 0;
    let computerCounter = 0;

    while(userCounter < 5 && computerCounter < 5)
    {
        let computerChoice = getComputerChoice();
        let playerChoice = prompt("What is your choice?");
        let resultOfRound = playAround(playerChoice.toLowerCase(), computerChoice);

        if (resultOfRound.includes("Lose"))
        {
            computerCounter++;
            console.log(resultOfRound);
        }
        else if (resultOfRound.includes("Win"))
        {
            userCounter++;
            console.log(resultOfRound);
        }
        else 
        {
            console.log(resultOfRound);
        }
    }

    if (userCounter > computerCounter)
    {
        console.log("You have won the game! Score: " + userCounter + "-" + computerCounter);
    }
    else
    {
        console.log("You have loss :(. Score: " + computerCounter + "-" + userCounter);
    }
}