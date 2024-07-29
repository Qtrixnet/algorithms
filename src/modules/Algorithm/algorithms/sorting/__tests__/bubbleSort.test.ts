import { sortingAlgorithmTestTemplate } from '@/modules/Algorithm/algorithms/sorting/__mocks__/sortingAlgorithmTestTemplate'
import { bubbleSort } from '@/modules/Algorithm/algorithms/sorting/bubbleSort'

describe('bubbleSort', () => {
  sortingAlgorithmTestTemplate(bubbleSort)
})
