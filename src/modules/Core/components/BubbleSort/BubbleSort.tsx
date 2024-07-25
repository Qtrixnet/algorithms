'use client'

import { useEffect } from 'react'

import { bubbleSort } from '@/modules/Core/alghorithms/bubbleSort'
import { generateRandomArr } from '@/modules/Core/utils/generateRandomArr'
import { performanceLogger } from '@/modules/Core/utils/performanceLogger'

interface Props {
  length: number
}

export const BubbleSort = ({ length }: Props): null => {
  useEffect(() => {
    const start = performance.now()

    const result = bubbleSort(generateRandomArr(length))

    const end = performance.now()

    performanceLogger({
      algorithmName: 'bubble-sort',
      time: end - start,
      array: result,
    })
  }, [length])

  return null
}
