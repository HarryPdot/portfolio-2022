import { appContainer, test, container, gap } from '../src/styles/app.css';
import clsx from 'clsx';
import { Button, Home, Projects, Contact, About, Gap } from '../src/Components';
import { NavBar } from '../src/Components/NavBar/NavBar';
const App: any = () => {
  return (
    <div className={clsx(appContainer, container)}>
      <Home />
      <Gap />
      <About />
      <Gap />
      <Projects />
      <Gap />
      <Contact />
    </div>
  );
};

export default App;
