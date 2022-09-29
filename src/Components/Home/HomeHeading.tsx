import { ReactNode } from 'react';
import { rhozaOne } from '../../Components';
import { margin0 } from '../../styles';
import clsx from 'clsx';

interface homeProps {
  className?: string;
  children: ReactNode;
  id?: string;
}

const HomeHeading = (props: homeProps) => {
  const { className, children, id } = props;
  return (
    <h1 id={id} className={clsx(className, margin0, rhozaOne)}>
      {children}
    </h1>
  );
};

export { HomeHeading };
