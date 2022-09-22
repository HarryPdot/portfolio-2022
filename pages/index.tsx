import Home from '../src/Components/Home/Home'
import About from '../src/Components/About/About'
import Projects from '../src/Components/Projects/Projects'
import Contact from '../src/Components/Contact/Contact'
import { appContainer, test, container, gap } from '../src/styles/app.css'
import clsx from 'clsx';

const App: any = () => {
  return (
    <div className={clsx(appContainer, container)}>
      <Home></Home>
      <div className={clsx(gap, test)}></div>
      <About></About>
      <div className={clsx(gap, test)}></div>
      <Projects></Projects>
      <div className={clsx(gap, test)}></div>
      <Contact></Contact>
    </div>
  )
}

export default App
