

import {sum} from './hw_1';
import {numberOfCharacters} from './hw_1';
import {sumOfThreeDigits} from './hw_1';

test("Проверка суммы_120+32", () =>{
    expect(sum(120,32)).toBe(152);
})
test("Количество символов в строке", () =>{
    expect(numberOfCharacters("123","1234")).toBe(7);
})
test("Сумма цифр в числе", () =>{
    expect(sumOfThreeDigits(123)).toBe(6);
})



