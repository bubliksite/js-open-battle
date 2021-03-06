// На поле есть несколько фишек chips.
// i-я фишка находится в позиции chips[i].
//
// Любой фишкой вы можете делать неограниченное количество ходов. Каждый тип хода имеет свою стоимость. Существует только два различных типа хода:
//
// Переместить i-ю фишку на 2 единицы влево или вправо - стоимость 0
// Переместить i-ю фишку на 1 единицу влево или вправо - стоимость 1
// Первоначально в одной позиции может любое количество фишек.
//
// Напишите функцию которая определяет минимальную стоимость, необходимую для перемещения всех фишек в одну позицию (любую позицию).
//
// На входе: массив целых чисел chips
// На выходе: целове число - минимальная стоимость за перемещение фишек в одну позицию

/**
 * Реализуйте функцию minSteps
 */
function minSteps(chips) {
  let odd = 0
  let even = 0

  let odd_cost = 0
  let even_cost = 0
  let cost = 0

  for (i = chips.length - 1; i >= 0; i--) {
    if (isOdd(chips[i])) {
      odd++
      even_cost++
    } else {
      even++
      odd_cost++
    }
    if (odd > even) {
      cost = odd_cost
    } else {
      cost = even_cost
    }
  }
  return cost
}

function isOdd(number) {
  if (number % 2 === 0) {
    return false
  } else {
    return true
  }
}
