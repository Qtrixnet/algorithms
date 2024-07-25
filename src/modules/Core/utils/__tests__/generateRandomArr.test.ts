import { generateRandomArr } from '@/modules/Core/utils/generateRandomArr'

describe('generateRandomArr.', () => {
  it('should generate random array with positive length', () => {
    const result = generateRandomArr(5)

    expect(result).toHaveLength(5)
  })

  it('should generate empty array with zero length', () => {
    const result = generateRandomArr(0)

    expect(result).toEqual([])
  })

  it('should generate empty array with negative length', () => {
    const result = generateRandomArr(-1)

    expect(result).toEqual([])
  })
})
