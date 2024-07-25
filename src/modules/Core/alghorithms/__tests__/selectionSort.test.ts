import { sortingAlgorithmTestTemplate } from '@/modules/Core/alghorithms/__mocks__/sortingAlgorithmTestTemplate'
import { selectionSort } from '@/modules/Core/alghorithms/selectionSort'

describe('selectionSort', () => {
  sortingAlgorithmTestTemplate(selectionSort)
})
