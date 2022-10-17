import clsx from "clsx";
import { FileText, SquaresFour } from "phosphor-react";
import { useState } from "react";
import { Heading } from "../components/Heading";
import { SideBar } from "../components/SideBar";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";

export function Relatorio(){
    const [open, setOpen] = useState(true);
    
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
                                    [!open ? 'w-10' : 'w-32']
                                )
                            } src={!open ? '../../public/logo3.svg' : '../../public/logo-marfrig.svg'}></img>
                        </SideBar.Icon>
                        {open && <Heading className="mt-1" >| CAT 83</Heading>}                        
                    </div>
                    
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
                    <div className='flex gap-4 w-full h-[200px] py-4 px-4 rounded bg-gray-200'>
                        <label htmlFor="input-1" className="flex flex-col gap-2">
                            <Text>Input</Text>
                            <TextInput.Root>
                                <TextInput.Input placeholder="Digite aqui seu texto...">

                                </TextInput.Input>
                            </TextInput.Root>
                        </label>
                        <label htmlFor="input-1" className="flex flex-col gap-2">
                            <Text>Input 2</Text>
                            <TextInput.Root>
                                <TextInput.Input type="month" placeholder="Digite aqui seu texto...">

                                </TextInput.Input>
                            </TextInput.Root>
                        </label>
                    </div>
                </form>
            </div>            
        </div>
    )
}