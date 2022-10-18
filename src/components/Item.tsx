import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { ReactNode } from 'react';
import { Text } from './Text';


export interface ItemProps{
    children: ReactNode;
    childrenIcon: ReactNode;
}

export function Item (props: ItemProps){
    return(
        <div className=
        {
            clsx
            (
                'flex items-center w-full ',
                'py-3 px-6 gap-2 rounded bg-transparent',
                'text-gray-300 cursor-pointer',
                'hover:bg-gray-100 hover:text-blue-700',
            )
        }>
            <Slot className='w-5 h-5'>
                {props.childrenIcon}
            </Slot>
            <Text asChild className=''>
                {props.children}
            </Text>
        </div>
    )
}