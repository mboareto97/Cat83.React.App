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
        <div className='flex items-center gap-3 w-64'>
            <SelectPrimitive.Root >
                <SelectPrimitive.Trigger className=
                {
                    clsx
                    (
                        'inline-flex items-center justify-between rounded py-2 px-4 text-xs text-gray-300 gap-2 bg-white outline-none focus-within:ring-2 ring-blue-700',
                        'w-full'
                    )
                }>
                    <SelectPrimitive.Value className='text-black' placeholder={placeholder} />
                    <SelectPrimitive.Icon className='flex items-center justify-center bg-white cursor-default text-gray-300'>
                        <CaretDown />
                    </SelectPrimitive.Icon>
                </SelectPrimitive.Trigger>
                
                <SelectPrimitive.Content className='w-full overflow-hidden bg-white rounded'>
                    <SelectPrimitive.ScrollUpButton className='flex items-center justify-center bg-white cursor-default text-gray-300'>
                        <SelectPrimitive.Icon>
                            <CaretUp />
                        </SelectPrimitive.Icon>
                    </SelectPrimitive.ScrollUpButton>
                    <SelectPrimitive.Viewport className='p-1'>
                        {props.Data.map((option, index) => (
                            <SelectPrimitive.Item key={index} className='flex items-center py-2 px-2 gap-1 relative outline-none select-none text-xs rounded hover:bg-blue-700 hover:text-white' value={option.Value}>
                                <SelectPrimitive.ItemText>{option.Text}</SelectPrimitive.ItemText>
                                <SelectPrimitive.ItemIndicator className='flex items-center justify-center left-0 w-6'>
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