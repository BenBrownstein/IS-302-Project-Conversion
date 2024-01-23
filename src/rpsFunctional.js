import Code from "./rpsCode";
function RpsFunctional() {
    return (
        <>
            <h1>Rock, Paper, Scissors Game</h1>
            <p>Choose: Rock, Paper, or Scissors</p>
            <button id="rock"> Rock</button>
            <button id="paper">Paper</button>
            <button id="scissors">Scissors</button>
            <button id="cheat">Cheat</button>
            <p class="message"></p>
            <Code />
        </>
    );

}

export default RpsFunctional;
