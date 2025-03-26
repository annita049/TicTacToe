import Board from './Board';
import { useState } from 'react';

const player_X = 'X';
const player_O = 'O';

const TicTacToe = () => {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(player_X);

  const handleTileClick = (index)=>{ //index of the tile clicked
    if(tiles[index]) return;
    
    const newTiles = [...tiles]; // a new array is taken cause
    // state updates are supposed to be immutable in react
    newTiles[index] = playerTurn; 
    setTiles(newTiles);  // updates tiles with players turn 'O' or 'X'

    playerTurn =='X'? setPlayerTurn(player_O) : setPlayerTurn(player_X);

  }

  return (
    <div>
        <h1>TicTacToe</h1>
        <Board tiles={tiles} onTileClick={handleTileClick}/>
    </div>
  )
}

export default TicTacToe