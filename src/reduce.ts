export abstract class Reduce {
  constructor(protected numbers: number[]) {
    this.setNumbers(numbers);
  }

  public setNumbers(numbers: number[] = []) {
    this.numbers = numbers;
  }

  public getNumbers() {
    return this.numbers;
  }

  protected abstract reduce(): number;
}
