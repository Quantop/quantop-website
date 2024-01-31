import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './views/home/Home';
import Dashboard from './views/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
