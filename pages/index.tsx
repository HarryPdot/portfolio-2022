import { Container, width100 } from '../src/Components';
import { Home, Projects, Contact, About, Gap } from '../src/Components';

const App: any = () => {
  return (
    <Container className={width100}>
      <Home />
      <Gap />
      <About />
      <Gap />
      <Projects />
      <Gap />
      <Contact />
    </Container>
  );
};

export default App;
