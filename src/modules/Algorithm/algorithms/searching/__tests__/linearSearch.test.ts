import { searchingAlgorithmTestTemplate } from '@/modules/Algorithm/algorithms/searching/__mocks__/searchingAlgorithmTestTemplate'
import { linearSearch } from '@/modules/Algorithm/algorithms/searching/linearSearch'

describe('linearSearch', () => {
  searchingAlgorithmTestTemplate(linearSearch)
})
