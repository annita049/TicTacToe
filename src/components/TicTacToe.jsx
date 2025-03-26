import Board from './Board';
import { useState, useEffect } from 'react';

import GameOver from './GameOver';

const player_X = 'X';
const player_O = 'O';

const WinningCombinations = [  // array of objects
  {combo: [0,1,2], strikeClass: "strike-row-1"},
  {combo: [3,4,5], strikeClass: "strike-row-2"},
  {combo: [6,7,8], strikeClass: "strike-row-3"},

  {combo: [0,3,6], strikeClass: "strike-column-1"},
  {combo: [1,4,7], strikeClass: "strike-column-2"},
  {combo: [2,5,8], strikeClass: "strike-column-3"},

  {combo: [0,4,8], strikeClass: "strike-diagonal-1"},
  {combo: [2,4,6], strikeClass: "strike-diagonal-2"}
]

const checkWinner = (tiles, setstrikeClass, playerTurn)=>{
  console.log("check winner?");
  console.log(tiles);
  for(let {combo, strikeClass} of WinningCombinations){
    const tile1 = tiles[combo[0]];
    const tile2 = tiles[combo[1]];
    const tile3 = tiles[combo[2]];
    
    if(tile1!=null && tile1 == tile2 && tile2 == tile3 && tile1 == tile3){
      console.log(`${playerTurn} wins!`);
      console.log("k",combo[0]," ",combo[1]," ",combo[2]);
      setstrikeClass(strikeClass);
    }
  }
}


const TicTacToe = () => {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(player_X);
  const [strikeClass, setstrikeClass] = useState();


  const handleTileClick = (index)=>{ //index of the tile clicked
    if(tiles[index]) return;

    const newTiles = [...tiles]; // a new array is taken cause
    // state updates are supposed to be immutable in react
    newTiles[index] = playerTurn; 
    setTiles(newTiles);  // updates tiles with players turn 'O' or 'X'

    setPlayerTurn((playerTurn) => (playerTurn === 'X' ? player_O : player_X))

  }

  useEffect(()=>{
    checkWinner(tiles, setstrikeClass, playerTurn);
  },[tiles, playerTurn]);


  return (
    <div>
      <h1>TicTacToe</h1>
      <Board strike={strikeClass} playerTurn={playerTurn} tiles={tiles} onTileClick={handleTileClick}/>
      <GameOver/>
    </div>
  )
}

export default TicTacToe