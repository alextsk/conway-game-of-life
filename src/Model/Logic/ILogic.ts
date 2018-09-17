import { Grid, CellState } from '../../Utilities/Types';

interface ILogic{
  toggleCell(grid: Grid, x:number, y:number): Grid;
  updateState(grid: Grid): Grid;
}

export default ILogic;
