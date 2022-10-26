import { Header } from "../components/Header";
import { Heading } from "../components/Heading";

export function Home() {
    return(
        <>
            <Header />
            <div className='fixed flex flex-col w-screen top-16 py-10 gap-14 items-center justify-center'>
                <Heading className="mr-[50%]">Dashboard</Heading>                
            </div>
        </>
    )
}