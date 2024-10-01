import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import NewsDatails from './Pages/NewsDatails';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <div>
          {/* Navigation Links */}
          <Navbar />

          {/* Route Setup */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={< NewsDatails />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
