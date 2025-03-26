import Board from './Board';
import { useState } from 'react';

const player_X = 'X';
const player_Y = 'Y';

const TicTacToe = () => {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(player_X);

  const handleTileClick = (index)=>{ //index of the tile clicked
    const newTiles = [...tiles];
    newTiles[index] = playerTurn; 
    setTiles(newTiles);  // updates tiles with players turn 'O' or 'X'
  }

  return (
    <div>
        <h1>TicTacToe</h1>
        <Board tiles={tiles} onTileClick={handleTileClick}/>
    </div>
  )
}

export default TicTacToe