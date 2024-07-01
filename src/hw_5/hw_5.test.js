import { sumOfAllElements } from "./hw_5";
import { multiplyEachElBy_2 } from "./hw_5";
import { getMinValue } from "./hw_5";
import { getMaxValue } from "./hw_5";

test("Cумма всех элементов массива", () => {
  expect(sumOfAllElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(55);
});
test("Элементы массива перемножены на 2 ", () => {
  expect(multiplyEachElBy_2([1, 2])).toEqual(expect.arrayContaining([2, 4]));
});
test("Минимальное значение массива", () => {
  expect(getMinValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(1);
});
test("Максимальное значение массива", () => {
  expect(getMaxValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(10);
});
