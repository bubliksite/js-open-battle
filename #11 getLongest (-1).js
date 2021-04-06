// Напишите функцию, которая для заданной строки возвращает длину наибольшей подстроки без повторяющихся символов.
//
// На входе: s - заданна строка
// На выходе: целое число - длина наибольшей подстроки без повторяющихся символов

function getLongest(s) {
  let stringLength = s.length
  let max = 0
  if (s.length !== 0 || s.length !== 1) {
    for (let i = 0; i < s.length; i++) {
      for (let j = i + 1; j < s.length; j++) {
        if (s[i] === s[j]) {
          stringLength = j - i
          if (stringLength > max) {
            max = stringLength
          }
          break
        }
      }
      console.log(' ')
    }
  } else {
    return 0
  }
  return max
}

getLongest('tmmzuxt')
