import {changeAgeInObj} from './hw_4';
import {addFieldToCopy} from './hw_4';


test("Изминение возраста в объекте", () =>{
    expect(changeAgeInObj({name: "john", age: 30} ,1)).toMatchObject({name: "john", age: 1});
})

test("Добавить новому объекту поле role со значением admin", () =>{
    expect(addFieldToCopy({name: "john", age: 30}, {role:'admin'})).toMatchObject({"age": 30, "name": "john", "role": "admin"});
})
