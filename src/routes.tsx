import { 
    Routes, 
    Route } from "react-router-dom";
import { Menu } from "./Menu";
    
import { Relatorio } from "./pages/Relatorio";

export function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Menu children={<h1>Dashboard</h1>} title='Dashboard'/>}/>
            <Route path="/Relatorio" element={<Menu children={<Relatorio />} title='Relatório CAT 83'/>}/>
        </Routes>
    );
}