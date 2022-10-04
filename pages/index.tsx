import { mainContainer } from '../src/styles';
import { Home, Projects, Contact, About, Gap } from '../src/Components';
import { useState } from 'react';

const App: any = () => {
  const [isLoading, setLoading] = useState(false);

  return (
    <div className={mainContainer}>
      {isLoading ? (
        <div></div>
      ) : (
        <>
          <Home />
          <Gap />
          <About />
          <Gap />
          <Projects />
          <Gap />
          <Contact />
        </>
      )}
    </div>
  );
};

export default App;
