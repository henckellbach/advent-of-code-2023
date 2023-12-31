import fs from 'fs';

abstract class Day {
    id: number;

    protected constructor(id: number) {
      this.id = id;
    }

    async partOne(): Promise<string> {
      const content = await fs.promises.readFile(`./inputs/day${this.id}/part1.txt`);
      return this.solveForPartOne(content.toString());
    }

    // eslint-disable-next-line no-unused-vars
    abstract solveForPartOne(input: string) : string;

    async partTwo(): Promise<string> {
      const content = await fs.promises.readFile(`./inputs/day${this.id}/part2.txt`);
      return this.solveForPartTwo(content.toString());
    }

    // eslint-disable-next-line no-unused-vars
    abstract solveForPartTwo(input: string) : string;
}

export { Day };
