import {sumOfNumbersInRange} from './hw_3';
import {multiplication_table} from './hw_3';
import {averageAllOdds} from './hw_3';

test("Cумма всех целых чисел от 50 до 100", () =>{
    expect(sumOfNumbersInRange(50,100)).toBe(3825);
})
test("Cумма всех целых чиселот 0 до 2", () =>{
    expect(sumOfNumbersInRange(0,2)).toBe(3);
})
test("Таблица умножения на 1 * 7 = 7", () =>{
    expect(multiplication_table(7)).toEqual(expect.arrayContaining(['1 * 7 = 7']));
})

test("Таблица умножения на 10 * 8 = 80", () =>{
    expect(multiplication_table(8)).toEqual(expect.arrayContaining(['10 * 8 = 80']));
})
test("Среднее арифметическое всех не чётных чисел от 1 до 4", () =>{
    expect(averageAllOdds(4)).toBe(2);
})
test("Среднее арифметическое всех не чётных чисел от 1 до 9", () =>{
    expect(averageAllOdds(9)).toBe(5);
})