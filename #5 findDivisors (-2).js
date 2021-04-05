// Дано целое число num. Найдите два целых числа с минимальной разностью между ними (по модулю), произведение которых равно num + 1 или num + 2.
//
// Напишите функцию, возвращающую эти два числа в порядке возрастания.
//
// На входе: num - целое число, num > 0
// На выходе: массив чисел в порядке возрастания

/**
 * Реализуйте функцию findDivisors
 */
function findDivisors(num) {
  let minGap = num
  let result = []
  for (i = 2; i < num / 2; i++) {
    for (k = 1; k <= 2; k++) {
      console.log('проверяем число ' + (num + k) + '/' + i + '=' + (num + k) / i)
      if ((num + k) % i === 0) {
        console.log('подходит')
        let max = Math.max(Math.abs(num + k) / i, Math.abs(i))
        let min = Math.min(Math.abs(num + k) / i, Math.abs(i))
        let gap = max - min
        console.log('разница ' + max + '-' + min + '=' + gap)
        if (gap < minGap) {
          console.log('эта разница минимальна')
          minGap = gap
          console.log('минимальная разница теперь ' + minGap)
          result = [min, max]
        }
        console.log(' ')
      }
    }
  }
  return result
}
