import {Reduce} from "./reduce";

/**
 * @description AddReduce class that handles the reduce operation by
 * adding all the numbers passed as arguments
 */
export class AddReduce extends Reduce {
  /**
   * @description AddReduce class constructor
   * @param numbers Consists of a number array
   */
  constructor(...numbers: number[]) {
    super(numbers);
  }
  /**
   * @description Method that adds all the numbers in the ```numbers```
   * and returns the result
   * @return Returns a number resulting of the reduce
   *
   * Usage example:
   * ```typescript
   * const addRed = new AddReduce(4, 4, 2);
   * addRed.reduce()
   * ```
   */
  reduce() {
    let result = 0;
    this.numbers.forEach((num) => result += num);
    return result;
  }
}

