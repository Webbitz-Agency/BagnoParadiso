import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Servizi from './pages/Servizi';
import ChiSiamo from './pages/ChiSiamo';
import DoveSiamo from './pages/DoveSiamo';
import Galleria from './pages/Galleria';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/servizi" element={<Servizi />} />
              <Route path="/chi-siamo" element={<ChiSiamo />} />
              <Route path="/dove-siamo" element={<DoveSiamo />} />
              <Route path="/galleria" element={<Galleria />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
