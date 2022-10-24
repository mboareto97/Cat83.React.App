import * as SelectPrimitive from '@radix-ui/react-select';
import clsx from 'clsx';
import { CaretDown, CaretUp, Check, Placeholder } from 'phosphor-react';
import { ReactNode, SelectHTMLAttributes } from 'react';

export interface SelectInputRootProps {
    children: ReactNode;
}

function SelectInputRoot(props: SelectInputRootProps){
    return(
        <div className=
        {
            clsx
            (
                'flex items-center w-64',
                'py-2 px-4 gap-3 rounded bg-white',
                'cursor-pointer transition duration-500',
                'focus-within:ring-2 ring-blue-700',
                'hover:shadow-square',
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
}

function SelectInputView(props: SelectInputViewProps){
    return(        
        <div className='flex items-center w-64 gap-3'>
            <select onChange={event => props.eventChange(props.campo, event)} className={
                clsx
                (
                    'flex-1',
                    'outline-none bg-transparent cursor-pointer',
                    'text-gray-300 text-xs',
                    'focus:text-blue-700',
                    'after:border-transparent'
                )
            }>
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