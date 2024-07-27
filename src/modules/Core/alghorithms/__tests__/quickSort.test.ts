import { sortingAlgorithmTestTemplate } from '@/modules/Core/alghorithms/__mocks__/sortingAlgorithmTestTemplate'
import { quickSort } from '@/modules/Core/alghorithms/quickSort'

describe('quickSort', () => {
  sortingAlgorithmTestTemplate(quickSort)
})
