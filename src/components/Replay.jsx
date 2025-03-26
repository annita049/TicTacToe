import GameState from "./GameState";

const Replay = ({gameState, onReplay}) => {
    console.log("replay button?", gameState);
    if(gameState!==GameState.inprogress){
        return (
            <button className="replay-button" onClick={onReplay}> Play Again! </button>
        )
    }
}

export default Replay