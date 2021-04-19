import {Reduce} from "./reduce";

export class ProdReduce extends Reduce {
  constructor(...numbers: number[]) {
    super(numbers);
  }

  reduce() {
    let result = 1;
    this.getNumbers().forEach((num) => result *= num);
    return result;
  }
}
