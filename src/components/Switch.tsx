import * as SwitchPrimitive from '@radix-ui/react-switch';
import clsx from 'clsx';

interface SwitchProps extends SwitchPrimitive.SwitchProps{}

export function Switch (props: SwitchProps) {
    return(
        <SwitchPrimitive.Root {...props}  className=
        {
            clsx
            (
                'w-16 h-6',
                'bg-gray-100 rounded-full',
                'checked:bg-blue-700',
                'transition duration-500'
            )
        }>
            <SwitchPrimitive.Thumb className=
            {
                clsx
                (
                    'block relative w-10 h-5',
                    'bg-blue-700 rounded-full',
                    'transition-transform translate-x-[2px] will-change-transform',
                    'checked:translate-x-[1.35rem] checked:bg-gray-100',
                    'duration-500',
                )
            }/>
        </SwitchPrimitive.Root>
    )
}