import { ReactNode } from 'react';
import { button } from './Button.css';
import clsx from 'clsx';

interface ButtonProps {
  id?: string;
  children: ReactNode;
  className?: string;
  onClick: () => {};
}

const Button = (props: ButtonProps) => {
  const { children, id, className, onClick } = props;
  return (
    <button onClick={onClick} id={id} className={clsx(button, className)}>
      {children}
    </button>
  );
};

export { Button };
