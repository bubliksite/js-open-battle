// У Пети на руках карты, заданные массивом целых чисел.
//Он хочет разбить их по группам таким образом, чтобы каждая группа имела размер w и содержала ровно w последовательных карт.
//Например, набор [2, 3, 4] является последовательным, а набор [1, 3, 4] не является, так как пропущена карта со значением "2".
//Напишите функцию, которая проверяет, сможет ли Петя сгруппировать карты задуманным образом.
//
//На входе:
//cards - массив карт
// w - целове число (размер групп и количество карт в них), W всегда меньше длины массива cards
//
// На выходе: True, если карты возможно сгруппировать указанным образом, иначе - False

/** НЕ ПРОХОДИТ ОДИН ИЗ ТЕСТОВ */

/**
 * Реализуйте функцию canGroup
 */
function canGroup(cards, w) {
  let nabor = []
  let res = false
  for (let i = 0; i < cards.length; i++) {
    if (cards.length < w && cards.length >= 0) {
      console.log('остаток карт меньше возможного')
      res = false
    } else {
      for (let k = 0; k < w - 1; k++) {
        console.log('сравниваем ' + cards[i + k] + ' и ' + cards[i + k + 1])
        if (cards[i + k + 1] - cards[i + k] == 1) {
          res = true
        } else {
          res = false
          break
        }
      }
      if (res) {
        let new_nabor = cards.splice(i, w)
        console.log('набор найден [' + new_nabor + ']')

        nabor.push(new_nabor)
        console.log('остается массив [' + cards + ']')
        i = -1
        console.log('старт будет с ' + (i + 1))
        console.log(' ')
      } else {
        console.log('набор не найден')
      }
    }
  }
  console.log(nabor)
  return res
}

canGroup([1, 2, 3, 6, 2, 3, 4, 7, 8], 3)
