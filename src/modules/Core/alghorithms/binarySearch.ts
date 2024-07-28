import { SearchingAlgorithm } from '@/modules/Core/types/types'

export const binarySearch: SearchingAlgorithm = (array, target) => {
  if (array.length <= 0) return null

  let left = 0
  let right = array.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (array[mid] === target) {
      return mid
    } else if (array[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return null
}
