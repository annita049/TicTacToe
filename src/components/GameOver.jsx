import GameState from './GameState.js';

const GameOver = ({gameState}) => {
  console.log("gameState", gameState);

  switch (gameState) {

    case GameState.Owins:
      return <div className='game-over'>Player O wins!</div>
    
    case GameState.Xwins:
      return <div className='game-over'>Player X wins!</div>

    case GameState.draw:
      return <div className='game-over'>Draw!</div>
    
    case GameState.inprogress:
      return <></>
  
    default:
      return <></>
  }
}

export default GameOver