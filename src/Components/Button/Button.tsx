import { ReactNode } from 'react';
import { button } from './Button.css'
import clsx from 'clsx'

interface ButtonProps {
    id?: string;
    children: ReactNode;
    className?: string;
}

const Button = (props: ButtonProps) => {
    console.log(props)
    const { children, id, className } = props
    return <div id={id} className={clsx(button, className)}>{children}</div>
}

export { Button }