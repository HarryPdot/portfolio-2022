import { gridLayout, titleHeading, margin0, homeHeight } from '../../styles';
import { rhozaOne } from '../../Components';
import clsx from 'clsx';
import { NextPage } from 'next';

const Home: NextPage = (): JSX.Element => {
  return (
    <div className={clsx(homeHeight)}>
      <div className={gridLayout}>
        <section className={titleHeading}>
          <h1 className={clsx(margin0, rhozaOne)}>Harry Pham,</h1>
          <h1 className={clsx(margin0, rhozaOne)}>Full Stack Engineer</h1>
        </section>
      </div>
    </div>
  );
};

export { Home };
