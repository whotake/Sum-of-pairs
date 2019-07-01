import calculateSum from '../lib/index';

interface TestDataItem {
  input: number[];
  sum: number;
  output: number[][];
}

const testData: TestDataItem[] = [
  {
    input: [22, 3, 5, 0, 2, 2],
    sum: 5,
    output: [[5, 0], [3, 2]],
  },
  {
    input: [-5, 33, 2, 2, 3, 5, 0, 10, 3],
    sum: 5,
    output: [[2, 3], [5, 0], [-5, 10], [2, 3]],
  },
  {
    input: [5, 5, 5, 0, 0, 0, 5],
    sum: 5,
    output: [[5, 0], [5, 0], [5, 0]],
  },
];

test('basic', (): void => {
  for (const testItem of testData) {
    expect(calculateSum(testItem.sum, testItem.input)).toStrictEqual(testItem.output);
  }
});
