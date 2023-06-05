import { gridLayout, titleHeading, homeHeight } from '../../../styles';
import { nameColor, role1, role2, HomeHeading } from '../..';
import clsx from 'clsx';
import { NextPage } from 'next';

const Home: NextPage = (): JSX.Element => {
  return (
    <div className={clsx(homeHeight)}>
      <div className={gridLayout}>
        <section className={titleHeading}>
          <HomeHeading className={nameColor}>Harry Phams, </HomeHeading>
          <HomeHeading className={role1}>Full Stack </HomeHeading>
          <HomeHeading className={role2}>Engineer </HomeHeading>
        </section>
      </div>
    </div>
  );
};

export { Home };
