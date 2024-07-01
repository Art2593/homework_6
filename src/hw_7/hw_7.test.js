/** @jest-environment jsdom */
import { putInsertedValue } from "./hw_7";
import { showHiddenButton } from "./hw_7";

test("Работаем с разметкой", () => {
  // const el = document.createElement('block');
  // const el1 = document.createElement('input');
  // const el2 = document.createElement('button');

  //  el1.querySelector('input').value = '12';
  //  el2.querySelector('button').click();

  // const el = document.createElement('block');
  // let el1 = document.createElement('input');
  // el1.querySelector('input').value = '12';
  //el.querySelector('input').value = '12';

  expect(putInsertedValue()).toBe("12");
});
