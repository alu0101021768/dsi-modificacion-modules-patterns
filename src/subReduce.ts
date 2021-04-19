import {Reduce} from "./reduce";

/**
 * @description SubReduce class that handles the reduce operation by
 * substracting all the numbers passed as arguments
 */
export class SubReduce extends Reduce {
  /**
   * @description SubReduce class constructor
   * @param numbers Consists of a number array
   */
  constructor(...numbers: number[]) {
    super(numbers);
  }
  /**
   * @description Method that substracts all the numbers in the ```numbers```
   * and returns the result
   * @return Returns a number resulting of the reduce
   *
   * Usage example:
   * ```typescript
   * const subRed = new SubReduce(4, 4, 2);
   * subRed.reduce()
   * ```
   */
  reduce() {
    const allExceptFirst = this.getNumbers().slice(1);
    let result = this.getNumbers()[0];
    allExceptFirst.forEach((num) => result -= num);
    return result;
  }
  /**
   * @description Hook executed before the reduce
   */
  beforeReduce(): void { }
  /**
   * @description Hook executed after the reduce
   */
  afterReduce(): void {}
}

