import { InputHTMLAttributes, ReactNode } from 'react'

export interface SelectInputRootProps {
    children: ReactNode;
}

function SelectInputRoot(props: SelectInputRootProps){
    return(
        <div className='flex items-center w-64 gap-3 py-2 px-4 rounded bg-white focus-within:ring-2 ring-blue-700'>
            {props.children}
        </div>
    )
}

export interface SelectInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function SelectInputInput(props: SelectInputInputProps){
    return(
        <input
            className='bg-transparent flex-1 text-black text-xs placeholder:text-gray-300 outline-none'
            {...props}
        />
    )
}

export const SelectInput = {
    Root: SelectInputRoot,
    Input: SelectInputInput
}