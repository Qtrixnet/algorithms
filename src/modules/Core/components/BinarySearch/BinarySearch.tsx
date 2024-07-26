'use client'

import { useEffect } from 'react'

import { binarySearch } from '@/modules/Core/alghorithms/binarySearch'
import { performanceLogger } from '@/modules/Core/utils/performanceLogger'

interface Props {
  array: number[]
}

export const BinarySearch = ({ array }: Props): null => {
  useEffect(() => {
    const start = performance.now()
    binarySearch(array, 100)
    const end = performance.now()

    performanceLogger({
      algorithmName: 'binary-search',
      time: end - start,
      array,
    })
  }, [array])

  return null
}
