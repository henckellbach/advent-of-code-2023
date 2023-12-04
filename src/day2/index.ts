import { Day } from '../day';

const COLORS = ['blue', 'green', 'red'] as const;
type Color = typeof COLORS[number];

type Game = {
    id: number,
    maximums: Record<Color, number>;
}

class Day2 extends Day {
  constructor() {
    super(2);
  }

  private getColorTotal(draws: string, color: Color):number {
    return draws.match(new RegExp(`(\\d+) ${color}`, 'g'))?.reduce((prev, curr) => Math.max(prev, parseInt(curr, 10)), 0) ?? 0;
  }

  private filterGames(games: Game[], limits: Record<Color, number>) {
    return games.filter((game) => game.maximums.green <= limits.green
          && game.maximums.red <= limits.red
      && game.maximums.blue <= limits.blue);
  }

  parseLine = (input: string): Game => {
    const matches = input.match(/^Game (\d+): (.*)/);
    if (!matches) throw new Error(`Invalid input: ${input}`);
    const [, id, draws] = matches;

    const red = this.getColorTotal(draws, 'red');
    const green = this.getColorTotal(draws, 'green');
    const blue = this.getColorTotal(draws, 'blue');

    return {
      id: parseInt(id, 10),
      maximums: { red, green, blue },
    };
  }

  solveForPartOne(input: string): string {
    const games = input.split('\n').map(this.parseLine);
    const possibleGames = this.filterGames(games, { red: 12, green: 13, blue: 14 });

    return possibleGames.reduce((prev, curr) => prev + curr.id, 0).toString();
  }

  solveForPartTwo(input: string): string {
    const games = input.split('\n').map(this.parseLine);

    return games.reduce(
      (prev, curr) => prev
        + (curr.maximums.red * curr.maximums.green * curr.maximums.blue),
      0,
    ).toString();
  }
}

export default new Day2();
