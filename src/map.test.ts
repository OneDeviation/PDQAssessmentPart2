import "jest";
import { mapMe } from "./map";

describe("mapMe", () => {
  it("should not mutate the original object", () => {
    const list = [1, 2, 3];
    const copiedList = list.slice();
    mapMe(list, (el: any) => el * 2);
    expect(list).toEqual(copiedList);
  });
  it("should match return values from a mapped array", () => {
    const list = [
      "pizza",
      undefined,
      NaN,
      false,
      "PDQ",
      42,
      "JavaScript",
      2 % 1,
    ];
    const mapper = (el: any, i: number, arr: any[]) =>
      `${el + arr[arr.length - i]}?!`;
    const mapMeArr = mapMe(list, mapper);
    const mapArr = list.map(mapper);
    expect(mapMeArr).toEqual(mapArr);
  });
  it("should return empty when given an empty array", () => {
    const emptyArray: any[] = [];
    const mapMeArr = mapMe(emptyArray, (el: any) => el * 2);
    expect(mapMeArr).toEqual([]);
  });
});
