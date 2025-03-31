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
    <>
      <Global styles={globalStyles} />
      <ParticlesBackground />
      <div className="app-container">
        <Navbar />
        <div className="main-wrapper">
          <main className="main-content">
            <Home />
            <About />
            <Stats />
            <Gallery />
            <Contact />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
