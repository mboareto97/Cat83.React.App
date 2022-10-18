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
                [props.open ? "w-80" : "w-24"],
                'py-2 px-2 gap-10 rounded-r bg-white',
                'duration-500',
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
        <div className='flex items-center h-10 gap-2 cursor-pointer' {...props}>
            <img className=
            {
                clsx
                (
                    [!props.open ? 'w-8' : 'w-28']
                )
            } src=
            {
                !props.open ? '../../public/logo3.svg' : '../../public/logo-marfrig.svg'
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
                'cursor-pointer rounded text-gray-300',
                'hover:text-blue-900 hover:bg-gray-100',
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
