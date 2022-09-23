import { ReactNode } from 'react';
import { button } from './Button.css'
import clsx from 'clsx'

interface ButtonProps {
    id?: string;
    children: ReactNode;
    className?: string;
}

const Button = (props: ButtonProps) => {
    const { children, id, className } = props
    const windowScroll = () => {
        console.log(props)
    }
    return (
        <button id={id} className={clsx(button, className)} onClick={windowScroll}>{children}</button>
    )
}

export { Button }