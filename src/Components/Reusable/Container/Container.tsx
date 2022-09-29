import { container } from './Container.css';
import { ReactNode } from 'react';
import clsx from 'clsx';

interface ContainerProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

const Container = (props: ContainerProps) => {
  const { id, children, className } = props;
  return (
    <section id={id} className={clsx(container, className)}>
      {children}
    </section>
  );
};

export { Container };
