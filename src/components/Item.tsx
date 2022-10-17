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
        <div className='w-full flex gap-2 items-center py-3 px-6 rounded bg-transparent cursor-pointer hover:bg-gray-100'>
            <Slot className='text-gray-300 w-5 h-5'>
                {props.childrenIcon}
            </Slot>
            <Text asChild className=
            {
                clsx
                (
                    'text-gray-300'
                )
            }>
                {props.children}
            </Text>
        </div>
    )
}