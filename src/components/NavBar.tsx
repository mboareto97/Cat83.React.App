import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Button } from './Button';
import { Heading } from './Heading';


export interface NavBarRootProps {
    children: ReactNode;
    className?: string;
}

function NavBarRoot({children, className}: NavBarRootProps){
    return(
        <div className=
        {
            clsx
            (
                'flex px-4 py-4 items-center justify-between bg-transparent border-b-2 border-gray-200',
                className
            )
        }>
            {children}
        </div>
    )
}

export interface NavBarIconProps {
    children: ReactNode;
}

function NavBarIcon({children}: NavBarIconProps){
    return(
        <Slot className=''>
            {children}
        </Slot>
    )
}


export interface NavBarButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
}

function NavBarButton(props: NavBarButtonProps) {
    return(
        <Button.Root {...props}>
            <Button.Action>
                {props.children}
            </Button.Action>            
        </Button.Root>
    )
}

export interface NavBarItemProps {
    children: string;
}

function NavBarTitle(props: NavBarItemProps){
    return(
        <Heading>
            {props.children}
        </Heading>
    )
}

export const NavBar = {
    Root: NavBarRoot,
    Icon: NavBarIcon,
    Button: NavBarButton,
    Title: NavBarTitle
}