// 1. Написать функцию, получающую на вход два числа. Если оба числа чётные - функция возвращает их произведение. Если оба числа нечётные - функция возвращает их сумму. Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число.

function getAnswer(num1, num2) {
    if (num1%2==0 && num2%2==0) {
        return num1*num2;
    } else if (num1%2 != 0 && num2%2 !=0) {
        return num1+num2;
    } else if (num1%2==0 && num2%2 != 0) {
        return num2;
    } else return num1;
};
console.log(getAnswer(1, 3));

// 2. Написать  функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.

function getDays(sec) {
    return sec/86400
}
console.log(getDays(40400));

// 3. Написать функцию isPrime, которая принимает число и возвращает true, если оно простое (имеет только два делителя: 1 и само число), и false в противном случае.

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num%i == 0) return false;
    } return num !== 1;
    };

console.log(isPrime(9));

// 4. Написать функцию, которая в качестве аргументов получает два числа и выводит в консоль наименьшее.

function printMin(numb1, numb2) {
    if (numb1 > numb2) {
        console.log(numb2);
    } else {
        console.log(numb1);
    };
};
printMin(10,12);

// 5. Написать  функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от меньшего числа к большему. 

function getArray(number1, number2) {
    let newArray = [];
    if (number1 < number2) {
        for (let i = number1; i <= number2; i++) {
            newArray.push(i);
        }; 
    } else {
        for (let i = number2; i <= number1; i++) {
            newArray.push(i);
    };
};
return newArray;
};
console.log(getArray(5, 2));