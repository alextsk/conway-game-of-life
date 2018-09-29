
class Animate {
  constructor(private speed: number) { }

  public run(fn, speed = this.speed, ...args) {
    setTimeout(
      () => {
        fn(...args);
        this.run(fn, this.speed, ...args);
      },
      this.speed,
    );
  }

  public changeSpeed(value: number): void {
    this.speed = value;
  }
}

export default Animate;
