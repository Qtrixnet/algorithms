import { sortingAlgorithmTestTemplate } from '@/modules/Core/alghorithms/__mocks__/sortingAlgorithmTestTemplate'
import { insertionSort } from '@/modules/Core/alghorithms/insertionSort'

describe('insertionSort', () => {
  sortingAlgorithmTestTemplate(insertionSort)
})
