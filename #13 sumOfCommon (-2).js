// Дано три массива, состоящие из натуральных чисел.
// Напишите функцию, которая возвращает сумму элементов, которые встречаются во всех трех массивах. Если таких чисел нет, функция должна возвращать 0. Массив может быть пустым.
//
// На входе: три массива натуральных чисел (arr1, arr2, arr3)
// На выходе : число (integer)

/**
 * Реализуйте функцию sumOfCommon
 */
function sumOfCommon(arr1, arr2, arr3) {
  let sum = 0
  let arr = []
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        for (let k = 0; k < arr3.length; k++) {
          if (arr1[i] === arr3[k]) {
            if (arr.length > 0) {
              arr.push(arr1[i])
              sum = sum + arr1[i]
              for (let l = 0; l < arr.length; l++) {
                if (arr1[i] !== arr[l]) {
                }
              }
            } else {
              arr.push(arr1[i])
              sum = sum + arr1[i]
              arr1.splice(i, 1)
              arr2.splice(j, 1)
              arr3.splice(k, 1)
              i--
              j--
              k--
            }
          }
        }
      }
    }
  }
  return sum
}
