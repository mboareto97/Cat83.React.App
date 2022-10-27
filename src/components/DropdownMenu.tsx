import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { Text } from './Text';
import { ReactNode } from 'react';

export interface DropdownMenuProps {
    open: boolean;
    items: Array<{Text: string, Icon: ReactNode, Route: string}>;
}

export function DropdownMenu(props: DropdownMenuProps) {
    const navigate = useNavigate();
    
    return(
        <>
            <div className=
            {
                clsx
                (
                    'fixed w-0 h-0 right-6 top-[4.5rem] z-50',
                    [props.open ? "opacity-100" : "opacity-0"],
                    'border-l-8 border-r-8 border-b-8 border-solid border-transparent border-b-blue-900',
                    'duration-300',
                )
            } />
            <div 
            className=
            {
                clsx
                (
                    'fixed flex flex-col w-56 py-1 justify-center right-2 top-20 text-white z-50',
                    [props.open ? "h-28 opacity-100" : "h-0 opacity-0"],
                    'rounded-lg bg-blue-900',
                    'duration-300',
                )
            }
            >
                {props.items.map((item, index) => (
                    <div 
                        className=
                        {
                            clsx
                            (
                                'flex w-full px-4 py-2 gap-2 cursor-pointer transition duration-500 hover:bg-blue-700', 
                                [!props.open && 'hidden']
                            )
                        }
                        onClick={() => navigate(item.Route)}
                        key={index}
                    >
                        {item.Icon}
                        <Text className='font-semibold'>{item.Text}</Text>
                    </div>
                ))}
            </div>
        </>         
    )
}