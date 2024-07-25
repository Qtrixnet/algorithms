import { sortingAlgorithmTestTemplate } from '@/modules/Core/alghorithms/__mocks__/sortingAlgorithmTestTemplate'
import { bubbleSort } from '@/modules/Core/alghorithms/bubbleSort'

describe('bubbleSort', () => {
  sortingAlgorithmTestTemplate(bubbleSort)
})
