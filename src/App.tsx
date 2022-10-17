import './styles/global.css';
import { Relatorio } from './pages/Relatorio';
import { Menu } from './Menu';

export function App() {

  return (
    <Menu children={<Relatorio />}/>
  )
}
