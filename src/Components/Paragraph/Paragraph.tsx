import { ParagraphStyle } from './Paragraph.css';
import { Children, ReactNode } from 'react';
import clsx from 'clsx';

interface ParagraphProps {
  children: ReactNode;
  className?: string;
}

const Paragraph = (props: ParagraphProps) => {
  const { children, className } = props;
  return <p className={clsx(ParagraphStyle, className)}>{children}</p>;
};

export { Paragraph };
