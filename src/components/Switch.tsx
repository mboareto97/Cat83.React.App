import * as SwitchPrimitive from '@radix-ui/react-switch';
import clsx from 'clsx';

interface SwitchProps {}

export function Switch({}: SwitchProps) {
    return(
        <SwitchPrimitive.Root className=
        {
            clsx
            (
                'w-[42px] h-[25px]',
                'bg-gray-300 rounded-full',
                'checked:bg-green-400',
            )
        }>
            <SwitchPrimitive.Thumb className=
            {
                clsx
                (
                    'block relative w-[21px] h-[21px]',
                    'bg-white rounded-full',
                    'transition-transform translate-x-[2px] will-change-transform',
                    'checked:translate-x-[19px]',
                )
            }/>
        </SwitchPrimitive.Root>
    )
}