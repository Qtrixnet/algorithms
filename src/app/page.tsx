import { cx } from 'class-variance-authority'
import { ReactElement } from 'react'

import { BinarySearch } from '@/modules/Core/components/BinarySearch'
import { BubbleSort } from '@/modules/Core/components/BubbleSort'
import { InsertionSort } from '@/modules/Core/components/InsertionSort'
import { LinearSearch } from '@/modules/Core/components/LinearSearch'
import { QuickSort } from '@/modules/Core/components/QuickSort'
import { SelectionSort } from '@/modules/Core/components/SelectionSort'
import { generateRandomArr } from '@/modules/Core/utils/generateRandomArr'

import ArrayPrototypeSort from '../modules/Core/components/ArrayPrototypeSort/ArrayPrototypeSort'

const homeClassName = cx(
  // Блочная модель
  'flex flex-col gap-4',
)

const titleClassName = cx(
  // Блочная модель
  'p-4',
  // Оформление
  'bg-blue-900',
  // Типографика
  'font-bold text-xl',
)

const TEST_ARRAY_LENGTH = 10_000
const TEST_ARRAY = generateRandomArr(TEST_ARRAY_LENGTH)

const Home = (): ReactElement => {
  return (
    <section className={homeClassName}>
      <h2 className={titleClassName}>Алгоритмы сортировки</h2>
      <BubbleSort array={[...TEST_ARRAY]} />
      <SelectionSort array={[...TEST_ARRAY]} />
      <InsertionSort array={[...TEST_ARRAY]} />
      <QuickSort array={[...TEST_ARRAY]} />
      <ArrayPrototypeSort array={[...TEST_ARRAY]} />
      <h2 className={titleClassName}>Алгоритмы поиска</h2>
      <LinearSearch array={[...TEST_ARRAY]} />
      <BinarySearch array={[...TEST_ARRAY]} />
    </section>
  )
}

export default Home
