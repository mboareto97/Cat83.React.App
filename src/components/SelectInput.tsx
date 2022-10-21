import * as SelectPrimitive from '@radix-ui/react-select';
import clsx from 'clsx';
import { CaretDown, CaretUp, Check } from 'phosphor-react';

export interface SelectInputRootProps {
    Data: Array<{Value:string, Text:string}>;
    Placeholder?: string;
}

export function SelectInput(props: SelectInputRootProps){
    const placeholder = props.Placeholder ? props.Placeholder : 'Selecione...'

    return(
        <div className='flex items-center w-64 gap-3'>
            <SelectPrimitive.Root >
                <SelectPrimitive.Trigger className=
                {
                    clsx
                    (
                        'inline-flex items-center justify-between w-full',
                        'py-2 px-4 rounded gap-2 bg-white outline-none',
                        'text-xs text-gray-300',
                        'transition duration-500 ring-blue-700',
                        'focus-within:ring-2 focus-within:text-blue-700',
                        'hover:shadow-square',
                    )
                }>
                    <SelectPrimitive.Value placeholder={placeholder} />
                    <SelectPrimitive.Icon className=
                    {
                        clsx
                        (
                            'flex items-center justify-center',
                            'cursor-default text-gray-300'
                        )
                    }>
                        <CaretDown weight='bold'/>
                    </SelectPrimitive.Icon>
                </SelectPrimitive.Trigger>
                
                <SelectPrimitive.Content className='w-full rounded overflow-hidden bg-white'>
                    <SelectPrimitive.ScrollUpButton className='flex items-center justify-center cursor-default'>
                        <SelectPrimitive.Icon>
                            <CaretUp />
                        </SelectPrimitive.Icon>
                    </SelectPrimitive.ScrollUpButton>
                    <SelectPrimitive.Viewport className='p-1 transition duration-500'>
                        {props.Data.map((option, index) => (
                            <SelectPrimitive.Item key={index} className=
                            {
                                clsx
                                (
                                    'relative flex items-center',
                                    'py-2 px-2 gap-1 rounded',
                                    'outline-none select-none text-xs text-blue-700',
                                    'transition duration-300',
                                    'hover:bg-blue-700 hover:text-white',
                                )
                            } value={option.Value}>
                                <SelectPrimitive.ItemText>{option.Text}</SelectPrimitive.ItemText>
                                <SelectPrimitive.ItemIndicator className='flex items-center justify-center w-6'>
                                    <Check />
                                </SelectPrimitive.ItemIndicator>
                            </SelectPrimitive.Item>
                        ))}                        
                    </SelectPrimitive.Viewport>
                </SelectPrimitive.Content>
            </SelectPrimitive.Root>
        </div>
        
    )
}