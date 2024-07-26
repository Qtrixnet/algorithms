import { cx } from 'class-variance-authority'
import { ReactElement } from 'react'

import { BinarySearch } from '@/modules/Core/components/BinarySearch'
import { BubbleSort } from '@/modules/Core/components/BubbleSort'
import { SelectionSort } from '@/modules/Core/components/SelectionSort'
import { generateUnsortedArr } from '@/modules/Core/utils/generateUnsortedArr'

const homeClassName = cx(
  // Блочная модель
  'm-auto',
)

const titleClassName = cx('text-5xl')

const TEST_ARRAY_LENGTH = 20_000
const TEST_ARRAY = generateUnsortedArr(TEST_ARRAY_LENGTH)

const Home = (): ReactElement => {
  return (
    <section className={homeClassName}>
      <h1 className={titleClassName}>Algorithms</h1>
      <BubbleSort array={TEST_ARRAY} />
      <SelectionSort array={TEST_ARRAY} />
      <BinarySearch array={TEST_ARRAY} />
    </section>
  )
}

export default Home
