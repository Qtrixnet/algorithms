import { SortingAlgorithm } from '@/modules/Core/types/types'

const swap = (array: number[], i: number, j: number): void => {
  if (array.length <= 1) return

  const temp = array[i]

  array[i] = array[j]
  array[j] = temp
}

export const bubbleSort: SortingAlgorithm = (array) => {
  let swapped = true

  while (swapped) {
    swapped = false

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1)
        swapped = true
      }
    }
  }

  return array
}
