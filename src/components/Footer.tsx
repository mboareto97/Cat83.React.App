import clsx from 'clsx';
import { useState } from 'react';
import MarfrigLogo from '../assets/marfrig-logo.png'
import { DownloadSimple, SquaresFour, TrashSimple } from 'phosphor-react';
import { FileText } from 'phosphor-react';
import { Button } from './Button';
import { ReactNode } from 'react';

export interface FooterProps {
    children: ReactNode;
}

export function Footer(props: FooterProps) {
    return(
        <>
            <div 
                className=
                {
                    clsx
                    (
                        'flex fixed justify-end w-full gap-2 p-3 bottom-0 bg-white border-t-[0.05rem] border-gray-100 z-0'
                    )
                }
            >                
                {props.children}
            </div>            
        </>        
    )
}