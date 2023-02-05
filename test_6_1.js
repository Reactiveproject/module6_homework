// Задание 6_1

/*В прошлом модуле в разделе «Циклы» вы выполняли следующее задание:
Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
При выполнении задания необходимо учесть, что массив может содержать не только числа,
но и, например, знаки, null и так далее.
На этот раз оформите решение в виде функции,
постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.*/

let arr = [1, 3, 5, 32, 0, 0, NaN, 3, 5, "wer"];

let oddNums = 0;
let evenNums = 0;
let zeroNums = 0;
let otherSign = 0;

function getArrInfo() {
  for (let i = 0; i < arr.length; ++i) {
    if (typeof arr[i] != "number" || isNaN(arr[i])) {
      otherSign += 1;
    } else {
      if (arr[i] === 0) {
        zeroNums += 1;
      } else {
        if (arr[i] % 2) {
          oddNums += 1;
        } else {
          evenNums += 1;
        }
      }
    }
  }

  console.log(`В массиве ${oddNums} нечетных элементов`);
  console.log(`В массиве ${evenNums} четных элементов`);
  console.log(`В массиве ${zeroNums} нулевых значений`);
  console.log(`В массиве ${otherSign} прочих значений`);
}

getArrInfo();
