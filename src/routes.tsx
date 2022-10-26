import { 
    Routes, 
    Route } from "react-router-dom";
import { Home } from "./pages/Home";
    
import { Relatorio } from "./pages/Relatorio";

export function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Relatorio" element={<Relatorio />}/>
        </Routes>
    );
}