import './styles/global.css';
import { BrowserRouter as Router } from 'react-router-dom';
import * as routes from './routes';

export function App() {

  return (
    <Router>
      <routes.default />
    </Router>
  )
}
