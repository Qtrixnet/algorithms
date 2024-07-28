import { searchingAlgorithmTestTemplate } from '@/modules/Core/alghorithms/__mocks__/searchingAlgorithmTestTemplate'
import { linearSearch } from '@/modules/Core/alghorithms/linearSearch'

describe('linearSearch', () => {
  searchingAlgorithmTestTemplate(linearSearch)
})
