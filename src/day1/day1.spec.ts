import day1 from './index';

describe('Day 1', () => {
  it('gets calibration values', () => {
    expect(day1.getCalibrationValue('1abc2')).toBe(12);
    expect(day1.getCalibrationValue('pqr3stu8vwx')).toBe(38);
    expect(day1.getCalibrationValue('a1b2c3d4e5f')).toBe(15);
    expect(day1.getCalibrationValue('treb7uchet')).toBe(77);
  });

  it('solves example 1', () => {
    expect(day1.solveForPartOne(`1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`)).toBe('142');
  });

  it('replaces numerals', () => {
    expect(day1.solveForPartTwo('two1nine')).toBe('29');
    expect(day1.solveForPartTwo('abcone2threexyz')).toBe('13');
  });

  it('solves example 2', () => {
    expect(day1.solveForPartTwo(`two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`)).toBe('281');
  });
});
