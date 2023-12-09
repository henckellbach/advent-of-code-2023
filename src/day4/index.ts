import { Day } from '../day';

class Day4 extends Day {
  constructor() {
    super(4);
  }

  private parseLine = (line: string): number => {
    const [, winningString, playerString] = line.split(/[|:]/);

    const winningNumbers = winningString.trim().split(/\s+/);
    const playerNumbers = playerString.trim().split(/\s+/);
    const map: Record<string, true> = {};
    let matchCount = 0;

    winningNumbers.forEach((num) => {
      map[num] = true;
    });

    playerNumbers.forEach((num) => {
      if (num in map) {
        matchCount++;
      }
    });

    return matchCount;
  }

  solveForPartOne(input: string) {
    const counts = input.split('\n').map(this.parseLine);

    return counts.reduce((prev, curr) => prev + (curr === 0 ? 0 : 2 ** (curr - 1)), 0).toString();
  }

  solveForPartTwo(input: string): string {
    const lines = input.split('\n');
    const records = lines.map((line) => ({ matches: this.parseLine(line), cards: 1 }));
    let totalCards = 0;

    records.forEach(({ cards, matches }, i) => {
      for (let j = i + 1; j < Math.min(i + 1 + matches, lines.length); j++) {
        records[j].cards += cards;
      }

      totalCards += cards;
    });

    return totalCards.toString();
  }
}

export default new Day4();
