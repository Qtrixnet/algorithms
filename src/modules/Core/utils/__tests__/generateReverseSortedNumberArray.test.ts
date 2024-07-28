import { generateReverseSortedNumberArray } from '@/modules/Core/utils/generateReverseSortedNumberArray'

describe('generateReverseSortedNumberArray', () => {
  it('should generate random array with positive length', () => {
    const result = generateReverseSortedNumberArray(5)

    expect(result).toEqual([5, 4, 3, 2, 1])
  })

  it('should generate empty array with zero length', () => {
    const result = generateReverseSortedNumberArray(0)

    expect(result).toEqual([])
  })

  it('should generate empty array with negative length', () => {
    const result = generateReverseSortedNumberArray(-1)

    expect(result).toEqual([])
  })
})
