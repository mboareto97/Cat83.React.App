import clsx from 'clsx';
import { useState } from 'react';
import MarfrigLogo from '../assets/marfrig-logo.png'
import { SquaresFour } from 'phosphor-react';
import { FileText } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import { DropdownMenu } from './DropdownMenu';

export interface HeaderProps {
    loading: boolean;
}

export function Header(props: HeaderProps) {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    
    return(
        <>
            <div 
                className=
                {
                    clsx
                    (
                        'flex fixed justify-between w-full p-4 bg-white border-b-[0.05rem] border-gray-100',
                        [props.loading ? 'top-[0]' : '']
                    )
                }                
            >                
                <img src={MarfrigLogo} className='h-8 cursor-pointer' onClick={() => navigate("/")}/>
                <div 
                    className=
                    {
                        clsx
                        (
                            "group flex h-8 w-8 cursor-pointer items-center justify-center rounded bg-transparent p-2"
                        )
                    }
                    onClick={() => setOpen(!open)}
                >
                    <div className="space-y-2">
                        <span 
                            className=
                            {
                                clsx
                                (
                                    'block h-1 w-4 origin-center rounded-full bg-gray-900 transition-transform ease-in-out',
                                    [open && 'translate-y-1.5 rotate-45'],
                                )
                            }
                        />
                        <span 
                            className=
                            {
                                clsx
                                (
                                    'block h-1 origin-center rounded-full bg-blue-700 transition-transform ease-in-out',
                                    [open ? 'w-4 -translate-y-1.5 -rotate-45' : 'w-2'],
                                )
                            }
                        />
                    </div>
                </div>
            </div>
            <DropdownMenu 
                open={open} 
                items=
                {
                    [
                        {Text: "Dashboard", Icon: (<SquaresFour weight='bold' className='w-6 h-6' />), Route: "/"}, 
                        {Text: "Relatorio", Icon: (<FileText weight='bold' className='w-6 h-6' />), Route: "/Relatorio"}
                    ]
                }
            />            
        </>        
    )
}