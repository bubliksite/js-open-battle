// Римские цифры пишутся с использованием семи различных символов: I, V, X, L, C, D и M.
//
// Символ     Значение
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1000
//
// Натуральные числа записываются при помощи римских цифр следующим образом: если большая цифра стоит перед меньшей, то они складываются (принцип сложения), если же меньшая стоит перед большей, то меньшая вычитается из большей (принцип вычитания). Есть шесть случаев, когда используется принцип вычитания:
//
// I может быть помещен перед V (5) и X (10), чтобы образовать 4 и 9
// X может быть помещен перед L (50) и C (100), чтобы образовать 40 и 90
// C можно поместить перед D (500) и M (1000), чтобы образовать 400 и 900
// Например, число двадцать четыре пишется как ХХIV, что можно представить в виде:
//
// Х + Х + IV = ХХIV
// 10 + 10 + (5 - 1) = 24
// Напишите функцию, которая возвращает заданное целое число, записанное римскими цифрами.
//
// На входе: num - натуральное число
// На выходе: строка, представляющая число num в римской системе счисления

/**
 * Реализуйте функцию getRomanNumber
 */
function getRomanNumber(num) {
  let arr = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    },
    rom = '',
    i
  for (i in arr) {
    while (num >= arr[i]) {
      rom = rom + i
      num = num - arr[i]
    }
  }
  return rom
}