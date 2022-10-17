import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Button } from './Button';
import { Text } from './Text';


export interface SideBarRootProps {
    children: ReactNode;
    className?: string;
    open: boolean;
}

function SideBarRoot(props: SideBarRootProps){

    return(
        <div className=
        {
            clsx
            (
                'flex flex-col h-full py-4 items-center gap-10 bg-white rounded-r',
                [props.open ? "w-80 px-4" : "w-24 px-3"],
                'duration-500 relative',
                props.className
            )
        }>  
            {props.children}
        </div>
    )
}

export interface SideBarIconProps {
    children: ReactNode;
}

function SideBarIcon({children}: SideBarIconProps){
    return(
        <Slot className=''>
            {children}
        </Slot>
    )
}


export interface SideBarButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
}

function SideBarButton(props: SideBarButtonProps) {
    return(
        <Button.Root {...props}>
            <Button.Action>
                {props.children}
            </Button.Action>            
        </Button.Root>
    )
}

export interface SideBarItemProps extends SideBarRootProps{
    childrenIcon: ReactNode;
    children: ReactNode;
}

function SideBarItem(props: SideBarItemProps){

    return(
        <div className=
        {
            clsx
            (
                'w-full h-10 flex gap-2 items-center cursor-pointer text-gray-300 hover:text-blue-900',
                [!props.open ? 'justify-center' : 'justify-start']
            )
        }>
            <Slot className='w-7 h-7'>
                {props.childrenIcon}
            </Slot>
            <Text asChild className=
            {
                clsx
                (
                    'font-semibold',
                    [!props.open && 'hidden duration-500']
                )
            }>
                {props.children}
            </Text>
        </div>
    )
}

export const SideBar = {
    Root: SideBarRoot,
    Icon: SideBarIcon,
    Button: SideBarButton,
    Item: SideBarItem
}
