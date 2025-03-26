import GameState from "./GameState";

const Replay = ({gameState}) => {
    console.log("reset button?",gameState);
    if(gameState!==GameState.inprogress){
        return (
            <button className="replay-button">Replay</button>
        )
    }
}

export default Replay