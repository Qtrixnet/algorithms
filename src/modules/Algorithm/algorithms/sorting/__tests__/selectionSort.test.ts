import { sortingAlgorithmTestTemplate } from '@/modules/Algorithm/algorithms/sorting/__mocks__/sortingAlgorithmTestTemplate'
import { selectionSort } from '@/modules/Algorithm/algorithms/sorting/selectionSort'

describe('selectionSort', () => {
  sortingAlgorithmTestTemplate(selectionSort)
})
