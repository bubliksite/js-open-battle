// Напишите функцию, которая принимает число в римской системе счисления и возвращает десятичное число.
// Натуральные числа записываются при помощи римских цифр следующим образом: если большая цифра стоит перед меньшей, то они складываются (принцип сложения), если же меньшая стоит перед большей, то меньшая вычитается из большей (принцип вычитания).
// Римские цифры:
//
// Символ     Значение
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1000
// На входе: roman_num - строка, представляющая число в римской системе счисления
// На выходе: число (integer) в десятичной системе счисления
/**
 * Реализуйте функцию getDecimalNumber
 */
function getDecimalNumber(roman) {
  let result = 0
  let value = 0
  let prev = 0

  for (let i = 0; i < roman.length; i++) {
    let cur = char_to_int(roman.charAt(i))
    if (cur > prev) {
      result -= 2 * value
    }
    if (cur !== prev) {
      value = 0
    }
    value += cur
    result += cur
    prev = cur
  }
  return result
}

function char_to_int(ch) {
  switch (ch) {
    case 'I':
      return 1
    case 'V':
      return 5
    case 'X':
      return 10
    case 'L':
      return 50
    case 'C':
      return 100
    case 'D':
      return 500
    case 'M':
      return 1000
    default:
      return -1
  }
}
