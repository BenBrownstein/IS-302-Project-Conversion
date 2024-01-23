import Code from "./rpsCode";

function Rps() {
    return (
        <>
            <h1>Rock, Paper, Scissors Game</h1>
            <p>Choose: Rock, Paper, or Scissors</p>
            <button id="rock"> <img src="Rock.jpg" alt="Rock" height="50px" width="50px" /></button>
            <button id="paper"> <img src="Paper.jpg" alt="Paper" height="50px" width="50px" /></button>
            <button id="scissors"> <img src="Scissors.jfif" alt="Scissors" height="50px" width="50px" /></button>
            <button id="cheat">Cheat</button>
            <p class="message"></p>
            <Code />
        </>
    );

}



export default Rps;
