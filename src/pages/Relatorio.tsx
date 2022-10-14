import { Heading } from "../components/Heading";
import { NavBar } from "../components/NavBar";

export function Relatorio(){
    return(
        <div className='w-full flex flex-col'>
            <NavBar.Root>
                <NavBar.Icon>
                    <Heading size="md" children="CAT 83"></Heading>
                </NavBar.Icon>
                <NavBar.Button>
                    Login
                </NavBar.Button>
            </NavBar.Root>
            <form className='flex justify-center mt-8 '>
                <div className='w-[1200px] h-[200px] rounded bg-gray-200'></div>
            </form>
        </div>
    )
}