class SumStructure {
  private readonly data: object;

  public constructor() {
    this.data = {};
  }

  public getItem(item: number): number | null {
    const dataItem = this.data[item];

    if (dataItem !== undefined && dataItem !== 0) {
      return dataItem;
    }

    return null;
  }

  public setItem(item: number): void {
    if (this.data[item] !== undefined) {
      this.data[item]++;
      return;
    }

    this.data[item] = 1;
  }

  public removeItem(item: number): void {
    this.data[item]--;
  }
}

function calculateSum(requiredSum: number, data: number[]): number[][] {
  const pairs: number[][] = [];
  const sumData = new SumStructure();

  for (const currentNumber of data) {
    const requiredNumber: number = requiredSum - currentNumber;

    if (sumData.getItem(requiredNumber)) {
      pairs.push([requiredNumber, currentNumber]);
      sumData.removeItem(requiredNumber);
      continue;
    }

    sumData.setItem(currentNumber);
  }

  return pairs;
}

export default calculateSum;
