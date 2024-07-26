'use client'

import { useEffect } from 'react'

import { bubbleSort } from '@/modules/Core/alghorithms/bubbleSort'
import { performanceLogger } from '@/modules/Core/utils/performanceLogger'

interface Props {
  array: number[]
}

export const BubbleSort = ({ array }: Props): null => {
  useEffect(() => {
    const start = performance.now()
    const result = bubbleSort(array)
    const end = performance.now()

    performanceLogger({
      algorithmName: 'bubble-sort',
      time: end - start,
      array: result,
    })
  }, [array])

  return null
}
