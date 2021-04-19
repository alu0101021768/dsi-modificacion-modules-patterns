import {Reduce} from "./reduce";

export class SubReduce extends Reduce {
  constructor(...numbers: number[]) {
    super(numbers);
  }

  reduce() {
    const allExceptFirst = this.getNumbers().slice(1);
    let result = this.getNumbers()[0];
    allExceptFirst.forEach((num) => result -= num);
    return result;
  }
}

