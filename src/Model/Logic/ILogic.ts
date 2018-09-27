import { Grid } from '../../Utilities/Types';

interface ILogic{
  toggleCellState(grid: Grid, x:number, y:number): Grid;
  updateGrid(grid: Grid): Grid;
}

export default ILogic;
