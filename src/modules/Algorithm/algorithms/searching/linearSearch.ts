import { SearchingAlgorithm } from '@/modules/Algorithm/types/types'

export const linearSearch: SearchingAlgorithm = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i
    }
  }

  return null
}
