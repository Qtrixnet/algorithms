import { searchingAlgorithmTestTemplate } from '@/modules/Core/alghorithms/__mocks__/searchingAlgorithmTestTemplate'
import { binarySearch } from '@/modules/Core/alghorithms/binarySearch'

describe('binarySearch', () => {
  searchingAlgorithmTestTemplate(binarySearch)
})
