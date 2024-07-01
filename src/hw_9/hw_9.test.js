import {isRightTriangle} from './hw_9';
import {getCircleLength} from './hw_9';
import {getCircleSquare} from './hw_9';
import {getRoots} from './hw_9';

test("is it Right Triangle", () =>{
    expect(isRightTriangle(3,4,5)).toBe("Это прямоугольный треугольник");
})

test("Найти длину окружности с радиусом 4", () =>{
    expect(getCircleLength(4)).toBe(25.132741228718345);
})

test("Найти площадь круга с радиусом R 4", () =>{
    expect(getCircleSquare(4)).toBe(50.26548245743669);
})

test("Найти корни уравнения", () =>{
    expect(getRoots(1, -7, 12)).toBe('4 и 3');
})