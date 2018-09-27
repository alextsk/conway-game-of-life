import Messages from './Messages';

enum CellState {Dead, Alive}
type Grid = CellState[][];

type ComponentT = {
  selector: string,
  title: string,
  modifier?: string,
  auxSelector? : string,
  reporter?: (value:number) => string,
  labelSelector?: string,
  minVal?: number,
  maxVal?: number,
  initVal?: number,
  textUnstable?: string,
  message? : Messages,
};

type ConfigT = {
  selector: string,
  controls: {
    selector: string,
    components: {[key:string]: ComponentT},
  },
  field: {
    selector: string,
    wrapperSelector: string,
    cellSelector: string,
  },
};

export { Grid, CellState, ComponentT, ConfigT };
