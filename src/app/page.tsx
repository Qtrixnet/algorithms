import { cx } from 'class-variance-authority'
import { ReactElement } from 'react'

import { SearchingAlgorithms } from '@/modules/Core/components/SearchingAlgorithms'
import { SortingAlgorithms } from '@/modules/Core/components/SortingAlgorithms'

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

const Home = (): ReactElement => {
  return (
    <section className={homeClassName}>
      <h2 className={titleClassName}>Алгоритмы сортировки</h2>
      <SortingAlgorithms />
      <h2 className={titleClassName}>Алгоритмы поиска</h2>
      <SearchingAlgorithms />
    </section>
  )
}

export default Home
