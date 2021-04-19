import {Reduce} from "./reduce";

export class AddReduce extends Reduce {
  constructor(...numbers: number[]) {
    super(numbers);
  }

  reduce() {
    let result = 0;
    this.numbers.forEach((num) => result += num);
    return result;
  }
}

