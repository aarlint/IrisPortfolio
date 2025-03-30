import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Global } from '@emotion/react';
import { globalStyles } from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import ParticlesBackground from './components/ParticlesBackground';
import Home from './pages/Home';
import About from './pages/About';
import Stats from './pages/Stats';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Global styles={globalStyles} />
      <ParticlesBackground />
      <div className="app-container">
        <Navbar />
        <div className="main-wrapper">
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/stats" element={<Stats />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
