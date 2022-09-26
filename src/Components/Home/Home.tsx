import { container, gridLayout } from '../../styles/app.css';
import {
  titleHeading,
  margin0,
  homeHeight,
  rozhaOne,
} from '../../styles/Home.css';
import { Button } from '../../Components';
import clsx from 'clsx';
import { NextPage } from 'next';

const Home: NextPage = (): JSX.Element => {
  return (
    <div className={clsx(container, homeHeight)}>
      <div className={gridLayout}>
        <section className={titleHeading}>
          <h1 className={clsx(margin0, rozhaOne)}>Harry Pham,</h1>
          <h1 className={clsx(margin0, rozhaOne)}>Full Stack Engineer</h1>
        </section>
      </div>
    </div>
  );
};

export { Home };
