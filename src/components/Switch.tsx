import * as SwitchPrimitive from '@radix-ui/react-switch';
import clsx from 'clsx';

interface SwitchProps extends SwitchPrimitive.SwitchProps{}

export function Switch (props: SwitchProps) {
    return(
        <SwitchPrimitive.Root {...props}  className=
        {
            clsx
            (
                'w-[42px] h-[25px]',
                'bg-gray-300 rounded-full',
                'checked:bg-green-400',
                'transition duration-500'
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
                    'duration-500',
                )
            }/>
        </SwitchPrimitive.Root>
    )
}