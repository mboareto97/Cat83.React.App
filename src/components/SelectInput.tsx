import clsx from 'clsx';
import { ReactNode, SelectHTMLAttributes } from 'react';

export interface SelectInputRootProps {
    children: ReactNode;
    className?: string;
}

function SelectInputRoot(props: SelectInputRootProps){
    return(
        <div className=
        {
            clsx
            (
                'flex items-center w-48 h-10',
                'py-3 px-2 gap-3 rounded bg-gray-100',
                'cursor-pointer transition duration-500',
                'focus-within:ring-2 ring-blue-700',
                'hover:shadow-lg',
                props.className,
            )
        }>
            {props.children}
        </div>
    )
}

export interface SelectInputViewProps extends SelectHTMLAttributes<HTMLSelectElement>{
    children: ReactNode;
    campo: string;
    eventChange: any;
    attachClass?: string;
}

function SelectInputView(props: SelectInputViewProps){
    return(        
        <div className='flex items-center w-64 gap-3'>
            <select 
                onChange={event => props.eventChange(props.campo, event)} 
                className={
                    clsx
                    (
                        'flex-1',
                        'outline-none bg-transparent cursor-pointer',
                        'text-xs',
                        'focus:text-blue-700',
                        props.attachClass,
                    )
                }
            >
                {props.children}
            </select>
        </div>
        
    )
}

export interface SelectInputItem{
    default?: string;    
    dado: Array<{Value:number, Text:string}>;
}

function SelectInputItem(props: SelectInputItem) {
    const itemDefault = props.default ? props.default : 'Selecione...'
    return(
        <>
            <option>{itemDefault}</option>
            {
                props.dado.map
                (
                    (option, index) => (
                        <option key={index} value={option.Value}>{option.Text}</option>
                    )
                )
            }
        </>
    )
}

export const SelectInput = {
    Root: SelectInputRoot,
    View: SelectInputView,
    Item: SelectInputItem,
}