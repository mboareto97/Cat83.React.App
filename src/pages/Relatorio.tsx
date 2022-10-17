import clsx from "clsx";
import { CaretLeft, FileText, SquaresFour } from "phosphor-react";
import { useState } from "react";
import { Heading } from "../components/Heading";
import { SideBar } from "../components/SideBar";

export function Relatorio(){
    const [open, setOpen] = useState(true);
    
    return(
        <div className='w-screen h-screen flex bg-gray-100'>
            <div className='h-full flex flex-col'>
                <SideBar.Root open={open}>
                <CaretLeft className=
                {
                    clsx
                    (
                        'bg-white text-blue-900 text-2xl rounded-full absolute', 
                        '-right-3 top-9 border border-blue-900 cursor-pointer',
                        [!open && 'rotate-180 duration-300']
                    )
                } onClick={() => setOpen(!open)}/>
                    <SideBar.Icon>
                        <Heading size="md" children="CAT"></Heading>
                    </SideBar.Icon>
                    <SideBar.Button>
                        Login
                    </SideBar.Button>
                    <div className="flex flex-col gap-2">
                        <SideBar.Item open={open} childrenIcon={<SquaresFour weight="bold" />}>
                            {<a>Dashboad</a>}
                        </SideBar.Item>
                        <SideBar.Item open={open} childrenIcon={<FileText weight="bold" />} >
                            {<a>Relatorio</a>}
                        </SideBar.Item>
                    </div>
                </SideBar.Root>
            </div>
            <div id='content' className='w-full flex flex-col px-10 py-10 items-center'>
                <form className='w-full flex justify-center mt-8 '>
                    <div className='w-full h-[200px] rounded bg-gray-200'></div>
                </form>
            </div>
            
        </div>
    )
}