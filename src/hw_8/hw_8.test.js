import {getDayName} from './hw_8';
import {getMinutesFromStaretedDay} from './hw_8';
import {getDateOFyoungerUser} from './hw_8';

test("Получаем день недели по дате", () =>{
    expect(getDayName('13.06.2024')).toBe("Thursday");
})

test("Is it a function", () =>{
    expect(getMinutesFromStaretedDay).toBeInstanceOf(Function);
})

test("Самый молодой пользователь", () =>{
    expect(getDateOFyoungerUser(new Date('1993-01-12'), new Date('1999-01-23'))).toEqual(new Date('1999-01-23'));
})