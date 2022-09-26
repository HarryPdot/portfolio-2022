import { mainContainer } from '../src/styles/style';
import { Home, Projects, Contact, About, Gap } from '../src/Components';

const App: any = () => {
  return (
    <div className={mainContainer}>
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
