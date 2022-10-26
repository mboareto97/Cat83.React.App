import clsx from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react'

export interface TextInputRootProps {
    children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps){
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
            )
        }>
            {props.children}
        </div>
    )
}

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps){
    return(
        <input
            className=
            {
                clsx
                (
                    'flex-1',
                    'outline-none bg-transparent cursor-pointer',
                    'text-gray-900 text-xs placeholder:text-gray-900',
                    'focus:placeholder:text-blue-700',
                    'focus:text-blue-700',
                )
            }
            {...props}
        />
    )
}

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput
}