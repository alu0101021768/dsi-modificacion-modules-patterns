import {Reduce} from "./reduce";

/**
 * @description ProdReduce class that handles the reduce operation by
 * multiplying all the numbers passed as arguments
 */
export class ProdReduce extends Reduce {
  /**
   * @description ProdReduce class constructor
   * @param numbers Consists of a number array
   */
  constructor(...numbers: number[]) {
    super(numbers);
  }
  /**
   * @description Method that multiplys all the numbers in the ```numbers```
   * and returns the result
   * @return Returns a number resulting of the reduce
   *
   * Usage example:
   * ```typescript
   * const prodRed = new ProdReduce(4, 4, 2);
   * prodRed.reduce()
   * ```
   */
  reduce() {
    let result = 1;
    this.getNumbers().forEach((num) => result *= num);
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
