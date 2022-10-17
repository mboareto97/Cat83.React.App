import * as SwitchPrimitive from '@radix-ui/react-switch';

interface SwitchProps {}

export function Switch({}: SwitchProps) {

    return(
        <SwitchPrimitive.Root className='w-11 h-6 bg-gray-300 rounded-full py-[2px] relative checked:bg-green-400'>
            <SwitchPrimitive.Thumb className='block w-[19px] h-[19px] bg-white rounded-full transition-transform translate-x-[2px] will-change-transform checked:translate-x-[22px]'/>
        </SwitchPrimitive.Root>
    )
}