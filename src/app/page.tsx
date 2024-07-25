import { cx } from 'class-variance-authority'
import { ReactElement } from 'react'

import { BinarySearch } from '@/modules/Core/components/BinarySearch'
import { BubbleSort } from '@/modules/Core/components/BubbleSort'
import { SelectionSort } from '@/modules/Core/components/SelectionSort'

const homeClassName = cx(
  // Блочная модель
  'm-auto',
)

const titleClassName = cx('text-5xl')

const TEST_ARRAY_LENGTH = 10000

const Home = (): ReactElement => {
  return (
    <section className={homeClassName}>
      <h1 className={titleClassName}>Algorithms</h1>
      <BubbleSort length={TEST_ARRAY_LENGTH} />
      <SelectionSort length={TEST_ARRAY_LENGTH} />
      <BinarySearch length={TEST_ARRAY_LENGTH} />
    </section>
  )
}

export default Home
