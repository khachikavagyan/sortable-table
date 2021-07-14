import { stableSort, getComparator } from '../utils/sortFn';
import {
  originalArray,
  expectedDescArray,
  expectedAscArray,
} from '../utils/testData/sortData';

describe('Testing Sort Function', () => {
  it('orders by desc', () => {
    const sortResult = stableSort(
      originalArray,
      getComparator('desc', 'orderId')
    );
    expect(sortResult).toEqual(expectedDescArray);
  });
  it('orders by asc', () => {
    const sortResult = stableSort(
      originalArray,
      getComparator('asc', 'orderId')
    );
    expect(sortResult).toEqual(expectedAscArray);
  });
});
