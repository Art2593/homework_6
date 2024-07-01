import {greaterValue} from './hw_2';
import {getNameOfMonth} from './hw_2';
import {isCircleInSquare} from './hw_2';

test("Наибольшее значение из двух чисел_1", () =>{
    expect(greaterValue(2,4)).toBe(4);
})
test("Наибольшее значение из двух чисел_1", () =>{
    expect(greaterValue(4,2)).toBe(4);
})
test("Имя месяца по его номеру", () =>{
    expect(getNameOfMonth("1")).toBe("Нет такого месяца");
})
test("Имя месяца по его номеру", () =>{
    expect(getNameOfMonth(1)).toBe("Январь");
})
test("Поместился ли круг в квадрат", () =>{
    expect(isCircleInSquare(10, 14)).toBe("Круг поместился в квадрат");
})