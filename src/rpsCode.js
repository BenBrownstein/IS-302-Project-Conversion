export default function Code() {
    const options = ["rock", "paper", "scissors", "cheat"];

    const buttons = document.querySelectorAll("button");
    const message = document.querySelector(".message");

    buttons.forEach(button => { button.addEventListener("click", playGame); });

    function playGame(e) {
        const playerChoice = e.target.id;
        const computerChoice = options[Math.floor(Math.random() * 4)];

        const result = determineWinner(playerChoice, computerChoice);

        message.textContent = `You chose ${playerChoice}. The computer chose ${computerChoice}. ${result}`;
    }

    function determineWinner(player, computer) {
        if (player === computer) {
            return "It's a tie!";
        } else if (
            (player === "rock" && computer === "scissors") ||
            (player === "scissors" && computer === "paper") ||
            (player === "paper" && computer === "rock") || (player === "cheat")
        ) {
            return "You win!";
        } else {
            return "Computer wins!";
        }
    }
}