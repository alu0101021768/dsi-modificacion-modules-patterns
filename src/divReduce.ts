import {Reduce} from "./reduce";

/**
 * @description DivReduce class that handles the reduce operation by
 * dividing all the numbers passed as arguments
 */
export class DivReduce extends Reduce {
  /**
   * @description DivReduce class constructor
   * @param numbers Consists of a number array
   */
  constructor(...numbers: number[]) {
    super(numbers);
  }
  /**
   * @description Method that divides all the numbers in the ```numbers```
   * and returns the result
   * @return Returns a number resulting of the reduce
   *
   * Usage example:
   * ```typescript
   * const divRed = new SivReduce(4, 4, 2);
   * divRed.reduce()
   * ```
   */
  reduce() {
    const allExceptFirst = this.getNumbers().slice(1);
    let result = this.getNumbers()[0];
    allExceptFirst.forEach((num) => result /= num);
    return result;
  }
}

