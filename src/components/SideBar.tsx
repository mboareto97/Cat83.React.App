import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { HtmlHTMLAttributes, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { Text } from './Text';
import logoBranco from "../../public/logoBranco.svg";
import logoCatBranco from "../../public/logoCatBranco.svg";

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
                'fixed flex flex-col h-full items-center',
                [props.open ? "w-56" : "w-20"],
                'py-4 px-2 gap-10 rounded-r bg-blue-900',
                'duration-300',
                props.className
            )
        }>  
            {props.children}
        </div>
    )
}

export interface SideBarIconProps extends HtmlHTMLAttributes<HTMLElement>{
    open: boolean;
}

function SideBarIcon (props: SideBarIconProps){
    return(
        <div className=
        {
            clsx
            (
                'flex items-center',
                'p-2 gap-2 rounded cursor-pointer', 
                [!props.open && 'rotate-[360deg] duration-300']
            )
        } {...props}>
            <img className='h-10' src=
            {
                !props.open ? logoBranco : logoCatBranco
            }
            >
            </img>
        </div>  
    )
}

export interface SideBarItemProps extends SideBarRootProps{
    childrenIcon: ReactNode;
    children: ReactNode;
    path: string;
}

function SideBarItem(props: SideBarItemProps){
    const navigate = useNavigate();

    return(
        <div className=
        {
            clsx
            (
                'flex items-center w-full h-10 py-2 px-2',                
                [!props.open ? 'justify-center' : 'justify-start gap-2'],
                'cursor-pointer rounded text-white',
                'transition duration-300',
                'hover:bg-blue-700',
            )
        } onClick=
        {
            () => navigate(props.path)
        }>
            <div className=
            {
                clsx
                (
                    'flex items-center', 
                    [!props.open && 'absolute'],
                )
            }>
                <Slot className='w-6 h-6'>
                    {props.childrenIcon}
                </Slot>
            </div>
            <div className={
                clsx
                (
                    [!props.open ? 'opacity-0 duration-[1ms]' : 'visible opacity-100 duration-500'],
                    'transition'
                )
            }>
                <Text asChild className=
                {
                    clsx
                    (
                        'font-semibold',
                    )
                }>
                    {props.children}
                </Text>
            </div>
        </div>
    )
}

export const SideBar = {
    Root: SideBarRoot,
    Icon: SideBarIcon,
    Item: SideBarItem
}
