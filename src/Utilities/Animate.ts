class Animate {
  constructor(private speed: number) { }

  public run(fn, ...args) {
    let lastCall = 0;
    const that = this; // tslint:disable-line
    return (function animatep(fnP, ...argsP) {
      requestAnimationFrame((delta) => {
        if (delta - lastCall > that.speed) {
          lastCall = delta;
          fnP(...argsP);
        }
        animatep(fnP,  ...argsP);
      });
    }(fn, ...args));
  }

  public changeSpeed(value: number): void {
    this.speed = value;
  }
}

export default Animate;
