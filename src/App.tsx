import './App.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PartnersTicker } from './components/PartnersTicker';
import { Projects } from './components/Projects';
import { About } from './components/About';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <PartnersTicker />
        <About />
        <Projects />
      </main>
    </div>
  );
}

export default App;
