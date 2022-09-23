
import { appContainer, test, container, gap } from '../src/styles/app.css'
import clsx from 'clsx';
import { Button, Home, Projects, Contact, About } from '../src/Components'


const App: any = () => {
  return (
    <div className={clsx(appContainer, container)}>
      <Button></Button>
      <Home/>
      <div className={clsx(gap, test)}></div>
      <About/>
      <div className={clsx(gap, test)}></div>
      <Projects/>
      <div className={clsx(gap, test)}></div>
      <Contact/>
    </div>
  )
}

export default App
