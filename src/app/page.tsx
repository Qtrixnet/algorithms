import { cx } from 'class-variance-authority'
import { ReactElement } from 'react'

const homeClassName = cx(
  // Блочная модель
  'm-auto',
)

const Home = (): ReactElement => {
  return <section className={homeClassName}>Home</section>
}

export default Home
