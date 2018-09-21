import Messages from './Messages';
import IObserver from './IObserver';
type Payload = any;

class Observer implements IObserver{
  private observers = [];

  broadcast(type: Messages, data?: Payload) {
    this.observers.forEach(observer => observer.type === type && observer.handler(data));
  }

  addObserver(type: Messages, handler: (data?: Payload) => void) {
    this.observers.push({ type, handler });
  }

  removeObserver(handler: (data?: Payload) => void) : void {
    const index = this.observers.findIndex(obj => obj.handler === handler);
    this.observers.splice(index, 1);
  }
}

export default Observer;
