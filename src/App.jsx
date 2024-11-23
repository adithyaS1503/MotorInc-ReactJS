import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/navbar'
import Home from './components/Home/Home'
import Shows from './components/Shows/Shows'
import About from './components/About/About'
import Gallery from './components/Gallery/Gallery'

function App() {
  return (
    <>
    <Router>
      <Navbar/>      
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
      </Routes>
      </Router>
    </>
  );
}

export default App

// Always give your code to chatgpt to format it. It looks so good, check Shows.jsx