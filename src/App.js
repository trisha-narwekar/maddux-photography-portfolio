import logo from './media/logo.jpeg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Infrared from './infrared';
import Pano from './pano';
import Home from './Home'
import Bandw from './bandw'

function App() {
  return (
    <Router>
    <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/infrared' exact element={<Infrared/>} />
          <Route path='/pano' exact element={<Pano/>} />
          <Route path='/b&w' exact element={<Bandw/>} />
          /
      </Routes>
      </Router>
  );
}

export default App;