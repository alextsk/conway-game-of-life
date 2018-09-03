import Msg from './messages.ts';

class Observer{
    private observers = [];
  
    broadcast(type: Msg, data?) {
      this.observers.forEach(observer => observer.type === type && observer.handler(data));
    }
  
    addObserver(type: Msg, handler) {
      this.observers.push({ type, handler });
    }
    
    removeObserver(handler) : void {
      let index = this.observers.findIndex(obj => obj.handler === handler)
      this.observers.splice(index, 1)
    }
  }

export default Observer;