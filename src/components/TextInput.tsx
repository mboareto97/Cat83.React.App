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
                'flex items-center w-64',
                'py-2 px-4 gap-3 rounded bg-white',
                'focus-within:ring-2 ring-blue-700'
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
                    'outline-none bg-transparent','text-black text-xs placeholder:text-gray-300'
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