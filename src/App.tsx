import './styles/global.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { MainRoutes } from './routes';

export function App() {

  return (
    <Router>
      <MainRoutes />
    </Router>
  )
}
