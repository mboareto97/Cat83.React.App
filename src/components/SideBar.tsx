import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { HtmlHTMLAttributes, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
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
                'fixed flex flex-col h-full items-center',
                [props.open ? "w-64" : "w-24"],
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
                'flex items-center h-10',
                'p-2 gap-2 rounded bg-white cursor-pointer', 
                [!props.open && 'rotate-[360deg] duration-300']
            )
        } {...props}>
            <img src=
            {
                !props.open ? '../../public/logo_32.svg' : '../../public/logo-marfrig_32.svg'
            }>
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
                'flex items-center w-full h-12 py-2 px-2',                
                [!props.open ? 'justify-center' : 'justify-start gap-2'],
                'cursor-pointer rounded text-white',
                'hover:bg-blue-700',
            )
        } onClick=
        {
            () => navigate(props.path)
        }>
            <div className='flex items-center'>
                <Slot className='w-7 h-7'>
                    {props.childrenIcon}
                </Slot>
            </div>
            <div>
                <Text asChild className=
                {
                    clsx
                    (
                        'font-semibold',
                        [!props.open && 'hidden']
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
