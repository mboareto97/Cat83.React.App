import {clsx} from 'clsx'

interface HeadingProps{
    size?: 'sm' | 'md' | 'lg';
    children: string;
    className?: string;
}

export function Heading({size = 'md', children, className}: HeadingProps) {
    return(
        <h2 className=
        {
            clsx
            (
                'font-bold',
                {
                    'text-lg': size === 'sm',
                    'text-xl': size === 'md',
                    'text-2xl': size === 'lg'
                },
                [className ? className : 'text-blue-900']
            )
        }>
            {children}
        </h2>
    )
}