import { Grid } from '../../Types';

interface IState {
  getGrid(): Grid;
  toggleCell(col: number, row: number): void;
  getNextState(): boolean;
  resetGrid(): void;
  setWidth(width: number): void;
  setHeight(width: number): void;
}

export default IState;
