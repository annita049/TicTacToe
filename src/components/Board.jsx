import Tile from './Tile';
import Strike from './Strike';

const Board = ({tiles}) => {
  return (
    <div className='board'>
      {/* <div>Board</div> */}
      <Tile value={tiles[0]} className="right-border bottom-border"/>
      <Tile value={tiles[1]} className="right-border bottom-border"/>
      <Tile value={tiles[2]} className="bottom-border"/>
      <Tile value={tiles[3]} className="right-border bottom-border"/>
      <Tile value={tiles[4]} className="right-border bottom-border"/>
      <Tile value={tiles[5]} className="bottom-border"/>
      <Tile value={tiles[6]} className="right-border"/>
      <Tile value={tiles[7]} className="right-border"/>
      <Tile value={tiles[8]}/>
      <Strike/>
    </div>
    )
}

export default Board