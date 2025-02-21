import { BrowserRouter as Router } from 'react-router-dom';
import Index from './pages/Index';
import './App.css';

function App() {
  return (
    <Router basename="/nguyen-portfolio">
      <Index />
    </Router>
  );
}

export default App;
