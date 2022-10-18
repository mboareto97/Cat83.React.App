import { SquaresFour, FileText } from "phosphor-react";
import { ReactNode, useState } from "react";
import { SideBar } from "./components/SideBar";

export interface MenuProps{
    children: ReactNode;
}

export function Menu(props: MenuProps){
    const [open, setOpen] = useState(false);
    
    return(
        <div className='flex w-screen h-screen bg-gray-100'>
            <SideBar.Root open={open}>
                <SideBar.Icon open={open} onClick={() => setOpen(!open)}/>                    
                <div className='flex flex-col w-full px-4 gap-2'>
                    <SideBar.Item open={open} childrenIcon={<SquaresFour weight='bold' />} path='/'>
                        {<a>Dashboad</a>}
                    </SideBar.Item>
                    <SideBar.Item open={open} childrenIcon={<FileText weight='bold' />} path='/Relatorio'>
                        {<a>Relatorio</a>}
                    </SideBar.Item>
                </div>
            </SideBar.Root>
            <div id='content' className='flex flex-col w-full items-center py-8'>
                {props.children}
            </div>            
        </div>
    )
}