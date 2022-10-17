import clsx from "clsx";
import { SquaresFour, FileText } from "phosphor-react";
import { ReactNode, useState } from "react";
import { SideBar } from "./components/SideBar";

export interface MenuProps{
    children: ReactNode;
}

export function Menu(props: MenuProps){
    const [open, setOpen] = useState(false);
    
    return(
        <div className='w-screen h-screen flex bg-gray-100'>
            <div className='h-full flex flex-col'>
                <SideBar.Root open={open}>
                    {/* <CaretLeft className=
                    {
                        clsx
                        (
                            'bg-white text-blue-900 text-2xl rounded-full absolute', 
                            '-right-3 top-9 border border-blue-900 cursor-pointer',
                            [!open && 'rotate-180 duration-300']
                        )
                    } onClick={() => setOpen(!open)}/> */}
                    <div className="flex h-10 gap-2 items-center cursor-pointer" onClick={() => setOpen(!open)}>
                        <SideBar.Icon>
                            <img className=
                            {
                                clsx
                                (
                                    [!open ? 'w-8' : 'w-28']
                                )
                            } src={!open ? '../../public/logo3.svg' : '../../public/logo-marfrig.svg'}></img>
                        </SideBar.Icon>                    
                    </div>
                    
                    <div className="flex flex-col w-full px-4 gap-2">
                        <SideBar.Item open={open} childrenIcon={<SquaresFour weight="bold" />}>
                            {<a>Dashboad</a>}
                        </SideBar.Item>
                        <SideBar.Item open={open} childrenIcon={<FileText weight="bold" />} >
                            {<a>Relatorio</a>}
                        </SideBar.Item>
                    </div>
                </SideBar.Root>
            </div>
            <div id='content' className='w-full flex flex-col items-center py-8'>
                {props.children}
            </div>            
        </div>
    )
}