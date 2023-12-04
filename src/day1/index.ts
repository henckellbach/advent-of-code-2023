import { Day } from '../day';

const NUMERALS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

class Day1 extends Day {
  constructor() {
    super(1);
  }

  private isNumeric(char: string): boolean {
    return !Number.isNaN(parseInt(char, 10));
  }

  private replaceNumerals(input: string): string {
    let result = input;
    NUMERALS.forEach((numeral, index) => {
      result = result.replace(new RegExp(`(${numeral})`, 'ig'), `$1${(index)}$1`);
    });
    return result;
  }

  getCalibrationValue(input: string): number {
    let first: string | null = null;
    let last: string | null = null;

    for (let i = 0, n = input.length; i <= n; i++) {
      if (first === null && this.isNumeric(input[i])) {
        first = input[i];
      }

      if (last === null && this.isNumeric(input[n - i])) {
        last = input[n - i];
      }

      if (first !== null && last !== null) {
        break;
      }
    }

    if (first === null || last === null) throw new Error(`Could not get calibration value for ${input}`);

    return parseInt(first.concat(last), 10);
  }

  solveForPartOne(input: string): string {
    const lines = input.split('\n');

    return lines.reduce((prev, curr) => prev + this.getCalibrationValue(curr), 0).toString();
  }

  solveForPartTwo(input: string): string {
    const lines = input.split('\n').map(this.replaceNumerals);

    return lines.reduce((prev, curr) => prev + this.getCalibrationValue(curr), 0).toString();
  }
}

export default new Day1();
