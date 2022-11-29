import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
