'use client'

import { useEffect } from 'react'

import { selectionSort } from '@/modules/Core/alghorithms/selectionSort'
import { performanceLogger } from '@/modules/Core/utils/performanceLogger'

interface Props {
  array: number[]
}

export const SelectionSort = ({ array }: Props): null => {
  useEffect(() => {
    const start = performance.now()
    const result = selectionSort(array)
    const end = performance.now()

    performanceLogger({
      algorithmName: 'selection-sort',
      time: end - start,
      array: result,
    })
  }, [array])

  return null
}
