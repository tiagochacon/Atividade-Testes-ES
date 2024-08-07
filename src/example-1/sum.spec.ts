import { sum } from "./sum";

describe('sum', () => {

  it('should return 3 when adding 1 and 2', () => {
    expect(sum(1, 2)).toBe(3);
  });

 
  it('should return -2 when adding -1 and -1', () => {
    expect(sum(-1, -1)).toBe(-2);
  });

  it('should return 0 when adding 0 and 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
});