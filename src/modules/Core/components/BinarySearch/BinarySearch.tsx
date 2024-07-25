'use client'

import { useEffect } from 'react'

import { binarySearch } from '@/modules/Core/alghorithms/binarySearch'
import { generateRandomArr } from '@/modules/Core/utils/generateRandomArr'
import { performanceLogger } from '@/modules/Core/utils/performanceLogger'

interface Props {
  length: number
}

export const BinarySearch = ({ length }: Props): null => {
  useEffect(() => {
    const array = generateRandomArr(length)
    array.pop()
    array.push(100)

    const start = performance.now()
    binarySearch(array, 100)
    const end = performance.now()

    performanceLogger({
      algorithmName: 'binary-search',
      time: end - start,
      array,
    })
  }, [length])

  return null
}
