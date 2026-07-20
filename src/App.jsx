import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Historia from './pages/Historia';
import Servicios from './pages/Servicios';
import Avisos from './pages/Avisos';
import Galeria from './pages/Galeria';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-papal-white">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/avisos" element={<Avisos />} />
          <Route path="/galeria" element={<Galeria />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App;
