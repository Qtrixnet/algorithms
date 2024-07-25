'use client'

import { useEffect } from 'react'

import { selectionSort } from '@/modules/Core/alghorithms/selectionSort'
import { generateRandomArr } from '@/modules/Core/utils/generateRandomArr'
import { performanceLogger } from '@/modules/Core/utils/performanceLogger'

interface Props {
  length: number
}

export const SelectionSort = ({ length }: Props): null => {
  useEffect(() => {
    const array = generateRandomArr(length)

    const start = performance.now()
    const result = selectionSort(array)
    const end = performance.now()

    performanceLogger({
      algorithmName: 'selection-sort',
      time: end - start,
      array: result,
    })
  }, [length])

  return null
}
