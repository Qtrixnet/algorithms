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
    const start = performance.now()

    const arr = generateRandomArr(length)

    binarySearch(arr, 100)

    const end = performance.now()

    performanceLogger({
      algorithmName: 'binary-search',
      time: end - start,
      array: arr,
    })
  }, [length])

  return null
}
