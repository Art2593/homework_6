import { getDiffer } from "./hw_6";
import { isWord } from "./hw_6";
import { poww } from "./hw_6";

test("Получаем разность", () => {
  expect(getDiffer(2, 1)).toBe(1);
});

test("Является ли одним слово введенное значение", () => {
  expect(isWord("usodif")).toBe(true);
});

test("Возведение числа в степень", () => {
  expect(poww(2, 3)).toBe(8);
});
