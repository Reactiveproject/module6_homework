// Задание 6_3

/*Написать функцию, которая принимает число как аргумент и возвращает функцию, 
которая также принимает число как аргумент и возвращает сумму этих двух чисел. 
Выведите в консоль результат.*/

function getNums(a) {
  return function getSum(b) {
    sum = a + b;
    return sum;
  };
}

let resultFunc = getNums(53);

console.log(resultFunc(4));
