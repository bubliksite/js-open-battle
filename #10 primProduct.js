// Некоторые числа можно представить как сумму простых чисел.
// Например:
//
// 7 = 2 + 5
// 20 = 7 + 13
// Некоторые невозможно представить в таком виде. Например, 17, 27.
// Напишите функцию, определяющую, возможно ли разделить заданное число n на сумму простых чисел.
// Если возможно, верните максимальное произведение этих чисел. Если число нельзя представить в виде простых чисел - верните 0.
//
// На входе: n - натуральное число
// На выходе: число (integer)

/**
 * Реализуйте функцию primeProduct
 */
function primeProduct(n) {
  let k = 0
  let m = 0
  let max = 0
  if (n < 2) {
    return 0
  }
  for (let i = 2; i < n; i++) {
    m = n - i
    k = i
    if (isSimple(m) && isSimple(k)) {
      let prod = k * m
      if (prod > max) {
        max = prod
      } else {
      }
    }
  }
  return max
}

function isSimple(e) {
  let res = true
  for (let j = 2; j < e; j++) {
    if (e % j === 0) {
      res = false
      break
    }
  }
  return res
}
