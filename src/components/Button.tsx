import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';


export interface ButtonRootProps {
    children: ReactNode;
    className?: string;
}

function ButtonRoot({children, className}: ButtonRootProps){
    return(
        <div className=
        {
            clsx
            (
                'flex items-center justify-center w-full h-10 gap-2 py-3 px-4 cursor-pointer',
                'bg-blue-900 rounded font-bold text-white text-sm hover:bg-blue-700',
                'focus-within:ring-2',
                className
            )
        }>
            {children}
        </div>
    )
}

export interface ButtonIconProps {
    children: ReactNode;
}

function ButtonIcon({children}: ButtonIconProps){
    return(
        <Slot className='w-6 h-6'>
            {children}
        </Slot>
    )
}


export interface ButtonActionProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
    asChild?: boolean;
}

function ButtonAction(props: ButtonActionProps) {
    const Comp = props.asChild? Slot : 'button'

    return(
        <Comp className='outline-none' {...props}>
            {props.children}
        </Comp>
    )
}

export const Button = {
    Root: ButtonRoot,
    Icon: ButtonIcon,
    Action: ButtonAction
}