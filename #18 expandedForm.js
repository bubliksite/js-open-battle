// Напишите функцию, которая возвращает расширенную запись для заданного числа.
// Например, число 80452 в расширенной записи выглядит как "80000 + 400 + 50 + 2".
// Между числами и знаками "+" должно быть по одному пробелу.
//
// На входе: натуральное число
// На выходе: строка - расширенная запись числа

/**
 * Реализуйте функцию expandedForm
 */
function expandedForm(number) {
  let string = number.toString()
  let newString = ''
  let end = ''
  for (let i = 0; i < string.length; i++) {
    if (string.length - i === 1) {
      end = ''
    } else {
      end = ' + '
    }
    newString = newString + string[i] * 10 ** (string.length - i - 1) + end
    console.log(newString)
  }
  return newString
}

expandedForm(-23562)
