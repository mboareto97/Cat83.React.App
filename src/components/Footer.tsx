import clsx from 'clsx';
import { ReactNode } from 'react';
import * as Button from './Button';


export interface FooterRootProps {
    children: ReactNode;
    className?: string;
}

function FooterRoot({children, className}: FooterRootProps){
    return(
        <div className=
        {
            clsx
            (
                'flex items-center justify-end bg-transparent border-t-2 border-gray-200',
                className
            )
        }>
            {children}
        </div>
    )
}

export interface FooterButtonProps extends Button.ButtonRootProps{
    childrenIcon: ReactNode;
    childrenAction: ReactNode;
}

function FooterButton(props: FooterButtonProps) {
    return(
        <Button.Button.Root {...props}>
            <Button.Button.Icon>
                {props.childrenIcon}
            </Button.Button.Icon>
            <Button.Button.Action>
                {props.childrenAction}
            </Button.Button.Action>            
        </Button.Button.Root>
    )
}

export const Footer = {
    Root: FooterRoot,
    Button: FooterButton
}