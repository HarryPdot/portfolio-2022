
import { appContainer, test, container, gap } from '../src/styles/app.css'
import clsx from 'clsx';
import { Button, Home, Projects, Contact, About, Gap } from '../src/Components'


const App: any = () => {
  return (
    <div className={clsx(appContainer, container)}>
      <Button>Button</Button>
      <Home/>
      <Gap/>
      <About/>
      <Gap/>
      <Projects/>
      <Gap/>
      <Contact/>
    </div>
  )
}

export default App
