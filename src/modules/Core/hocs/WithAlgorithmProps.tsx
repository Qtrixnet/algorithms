import { ComponentType, ReactElement } from 'react'

import { AlgorithmComponentProps } from '@/modules/Core/types/interfaces'
import { generateRandomNumberArray } from '@/modules/Core/utils/generateRandomNumberArray'
import { generateReverseSortedNumberArray } from '@/modules/Core/utils/generateReverseSortedNumberArray'

const ARRAY_LENGTH = 10_000
const RANDOM_NUMBER_ARRAY = generateRandomNumberArray(ARRAY_LENGTH)
const REVERSE_SORTED_NUMBER_ARRAY = generateReverseSortedNumberArray(ARRAY_LENGTH)
const SORTED_NUMBER_ARRAY = [...REVERSE_SORTED_NUMBER_ARRAY].reverse()

type Props = Omit<AlgorithmComponentProps, 'randomArray' | 'reverseSortedArray' | 'sortedArray' | 'elementsCount'>

export const WithAlgorithmProps = (Component: ComponentType<AlgorithmComponentProps>): ComponentType<Props> => {
  const WrappedComponent = (props: Props): ReactElement => {
    return (
      <Component
        {...props}
        elementsCount={ARRAY_LENGTH}
        randomArray={RANDOM_NUMBER_ARRAY}
        reverseSortedArray={REVERSE_SORTED_NUMBER_ARRAY}
        sortedArray={SORTED_NUMBER_ARRAY}
      />
    )
  }

  WrappedComponent.displayName = `WithAlgorithmProps(${Component.displayName || Component.name || 'Component'})`

  return WrappedComponent
}
