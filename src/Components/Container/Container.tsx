import { container } from './Container.css'
import { ReactNode } from 'react'
import clsx from 'clsx'

interface ContainerProps{
    id?: string;
    children: ReactNode;
    className?: string;
}

const Container = (props: ContainerProps) => {
    const { id, children, className } = props
    console.log(props)
    return(
        <div id={id} className={clsx(container, className)}>{children}</div>
    )
}

export { Container}