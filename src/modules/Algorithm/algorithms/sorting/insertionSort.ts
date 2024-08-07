import { SortingAlgorithm } from '@/modules/Algorithm/types/types'

const findInsertionIndex = (array: number[], i: number): number => {
  for (let j = i - 1; j >= 0; j--) {
    if (array[j] < array[i]) {
      return j + 1
    }
  }

  return 0
}

const shiftElements = (array: number[], insertionIndex: number, i: number): void => {
  const value = array[i]

  for (let j = i; j > insertionIndex; j--) {
    array[j] = array[j - 1]
  }

  array[insertionIndex] = value
}

export const insertionSort: SortingAlgorithm = (array) => {
  for (let i = 1; i < array.length; i++) {
    const insertionIndex = findInsertionIndex(array, i)

    shiftElements(array, insertionIndex, i)
  }

  return array
}
