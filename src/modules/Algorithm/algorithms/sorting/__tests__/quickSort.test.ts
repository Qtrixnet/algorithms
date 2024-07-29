import { sortingAlgorithmTestTemplate } from '@/modules/Algorithm/algorithms/sorting/__mocks__/sortingAlgorithmTestTemplate'
import { quickSort } from '@/modules/Algorithm/algorithms/sorting/quickSort'

describe('quickSort', () => {
  sortingAlgorithmTestTemplate(quickSort)
})
