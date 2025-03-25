import Tile from './Tile';
import Strike from './Strike';
const Board = () => {
  return (
    <div className='board'>
      {/* <div>Board</div> */}
      <Tile/>
      <Tile/>
      <Tile/>
      <Tile/>
      <Tile/>
      <Tile/>
      <Tile/>
      <Tile/>
      <Tile/>
      <Strike/>
    </div>
  )
}

export default Board