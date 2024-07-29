import { searchingAlgorithmTestTemplate } from '@/modules/Algorithm/algorithms/searching/__mocks__/searchingAlgorithmTestTemplate'
import { binarySearch } from '@/modules/Algorithm/algorithms/searching/binarySearch'

describe('binarySearch', () => {
  searchingAlgorithmTestTemplate(binarySearch)
})
