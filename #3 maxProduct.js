// Дан массив целых чисел. Найдите подмассив, состоящий из соседних чисел, произведение которых будет наибольшим.
// Напишите функцию, возвращающую максимальное произведение элементов подмассива.
//
// На входе:  массив целых чисел
// На выходе: число (максимальное произведение подмассива чисел)

/**
 * Реализуйте функцию maxProduct
 */
function maxProduct(nums) {
  let max = nums[0]
  for (let i = 0; i <= nums.length; i++) {
    if (max < nums[i]) {
      max = nums[i]
    }
    let t = nums[i]
    for (let k = i + 1; k < nums.length; k++) {
      t = t * nums[k]
      if (max < t) {
        max = t
      }
    }
  }
  return max
}

maxProduct(8)