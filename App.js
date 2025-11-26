import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProjetoCard from './components/ProjetoCard';
import VilaPage from './pages/vilaPage';
import OfficePage from './pages/officePage';
import Footer from './components/Footer';


function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <main>
      <div className="cards-container">
        <ProjetoCard
          link="https://antuneselellisconstrutora.com.br"
          imagem="/img/antunesSvg.svg"
          titulo="ANTUNES & LELLIS"
        />
        <ProjetoCard
          link="/vila"
          imagem="/img/vilaSvg.svg"
          titulo="VILA SÃO FRANCISCO"
        />
        <ProjetoCard
          link="/office"
          imagem="/img/officeLogo.svg"
          titulo="COSTA OFFICE"
        />
      </div>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vila" element={<VilaPage />} />
        <Route path="/office" element={<OfficePage />} />
      </Routes>
    </Router>
  );
}
