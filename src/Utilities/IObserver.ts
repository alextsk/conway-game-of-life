import Messages from '../Messages';
interface IObserver {
  addObserver(message: Messages, observer: (payload?: any) => void);
  broadcast(message: Messages, payload?: any);
  removeObserver(observer: () => void): void;
}

export default IObserver;
