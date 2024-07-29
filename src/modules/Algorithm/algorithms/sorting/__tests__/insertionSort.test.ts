import { sortingAlgorithmTestTemplate } from '@/modules/Algorithm/algorithms/sorting/__mocks__/sortingAlgorithmTestTemplate'
import { insertionSort } from '@/modules/Algorithm/algorithms/sorting/insertionSort'

describe('insertionSort', () => {
  sortingAlgorithmTestTemplate(insertionSort)
})
