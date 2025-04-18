import Board from './Board';
import { useState, useEffect } from 'react';
import GameOver from './GameOver';

import GameState from './GameState.js';
import Replay from './Replay.jsx';

// sound effects
import clickSoundAssest from '../sounds/click_sound.wav';
import gameOverSoundAssest from '../sounds/gameover_sound.wav';

const gameOverSound = new Audio(gameOverSoundAssest);
gameOverSound.volume = 0.2;

const clickSound = new Audio(clickSoundAssest);
clickSound.volume = 0.5;

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

const checkWinner = (tiles, setstrikeClass, setGameState)=>{
  console.log("checking winner ...");
  console.log(tiles);
  for(let {combo, strikeClass} of WinningCombinations){
    const tile1 = tiles[combo[0]];
    const tile2 = tiles[combo[1]];
    const tile3 = tiles[combo[2]];
    
    if (tile1 != null && tile1 == tile2 && tile2 == tile3 && tile1 == tile3){
      console.log(`${tile1} wins!`);
      console.log("oki",combo[0]," ",combo[1]," ",combo[2]);
      setstrikeClass(strikeClass);
      
      // setGameState((tile1)=> (tile1 == player_X? GameState.Owins : GameState.Xwins));
      if (tile1 === player_X) {
        setGameState(GameState.Xwins);
      }
      else {
        setGameState(GameState.Owins);
      }
      return ; // if someone wins draw condition is ignored.
    }
  }
  const allTilesFilled = tiles.every((tile)=> tile!=null);
  console.log(allTilesFilled);
  // console.log(GameState);
  if(allTilesFilled)
    setGameState(GameState.draw);
}


const TicTacToe = () => {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(player_X);
  const [strikeClass, setstrikeClass] = useState();
  const [gameState, setGameState] = useState(GameState.inprogress);

  const handleTileClick = (index)=>{ //index of the tiles clicked

    if(gameState != GameState.inprogress)
      return;

    if (tiles[index] !== null) return;
    const newTiles = [...tiles]; // a new array is taken cause
    // state updates are supposed to be immutable in react
    newTiles[index] = playerTurn; 
    setTiles(newTiles);  // updates tiles with players turn 'O' or 'X'
    setPlayerTurn((playerTurn) => (playerTurn === 'X' ? player_O : player_X))
  }

  useEffect(()=>{
    checkWinner(tiles, setstrikeClass, setGameState);
  },[tiles]);

  useEffect(() => {
    if (tiles.some(tile => tile != null)) {
      clickSound.play().catch(error => console.error('Playback failed:', error));
    }
  }, [tiles]);

  useEffect(()=>{
    if (gameState !== GameOver.inprogress){
      gameOverSound.play();
    }
  },[gameState]);

  const HandleReplay = () => {
    setTiles(Array(9).fill(null));
    setPlayerTurn(player_X);
    setstrikeClass(null);
    setGameState(GameState.inprogress);
    console.log("Replay");
  }

  return (
    <div>
      <h1>TicTacToe</h1>
      <Board strike={strikeClass} playerTurn={playerTurn} tiles={tiles} onTileClick={handleTileClick}/>
      <GameOver gameState={gameState}/>
      <Replay gameState={gameState} onReplay={HandleReplay}/>
    </div>
  )
}

export default TicTacToe