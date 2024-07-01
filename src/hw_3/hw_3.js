//1. Вывести в консоль сумму всех целых чисел от 50 до 100. - 3825
//2. Вывести в консоль сумму всех целых чисел от 0 до 2. - 3

function sumOfNumbersInRange(from, to) {
    let count = 0;
    for (let index = from; index <= to; index++) {
        count = count + index;
        
    }
    return count;
}






//2. Вывести в консоль таблицу умножения на 7.
function multiplication_table(multiplyBy) {
    let arr = [];
    for (let index = 1; index <= 10; index++) {
        let result = index * multiplyBy;
        arr[index - 1] = `${index} * ${multiplyBy} = ${result}`;
    }
    return arr;
}

//3. среднее арифметическое всех не чётных чисел от 1 до 4
// 1+3 = 4
//3. среднее арифметическое всех не чётных чисел от 1 до 5
// 1+3+5 = 9
//3. среднее арифметическое всех не чётных чисел от 1 до 6
// 1+3+5 = 9


function averageAllOdds(randomNumber) {
    
    let oddNumber = 0;
    let countOfOddNumber = 0;
    for (let index = 0; index <= randomNumber; index++) {

        if (index % 2 == 0) {
            
        } else {
            oddNumber = index + oddNumber;
            countOfOddNumber++;
        }
        
    }
    return oddNumber / countOfOddNumber;;
}


export { sumOfNumbersInRange }
export { multiplication_table }
export { averageAllOdds }