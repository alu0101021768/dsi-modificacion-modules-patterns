/**
 * @description Abstract class ```Reduce```, represents the Reduce operation.
 */
export abstract class Reduce {
  /**
   * @description Reduce class constructor
   * @param numbers Consists of a number array
   */
  constructor(protected numbers: number[]) {
    this.setNumbers(numbers);
  }
  /**
   * @description Setter for the numbers
   * @param numbers Consists of a number array, setted empty by default
   */
  public setNumbers(numbers: number[] = []) {
    this.numbers = numbers;
  }
  /**
   * @description Getter for the numbers
   * @returns Returns a number array
   */
  public getNumbers() {
    return this.numbers;
  }
  /**
   * @description Abstract method reduce that must be implemented by inherited
   * classes. This method will have a custom behaviour depending on the class
   * that implements it
   * @return Returns a number resulting of the reduce
   */
  protected abstract reduce(): number;
}
