import day0 from './index';

describe('Day 0', () => {
  it('part1 is identity function', () => {
    expect(day0.solveForPartOne('hello')).toBe('hello');
  });
});
