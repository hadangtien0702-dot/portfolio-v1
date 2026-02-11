import { useState, useEffect } from 'react';
import './Header.css';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScroll = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">Folioblox</div>
      <nav className="nav">
        <a href="#home" onClick={(e) => { e.preventDefault(); smoothScroll('home'); }}>Home</a>
        <a href="#about" onClick={(e) => { e.preventDefault(); smoothScroll('about'); }}>About</a>
        <a href="#projects" onClick={(e) => { e.preventDefault(); smoothScroll('projects'); }}>Projects</a>
        <a href="#contact" className="btn-contact" onClick={(e) => { e.preventDefault(); smoothScroll('contact'); }}>
          Get in touch <span className="arrow-icon">→</span>
        </a>
      </nav>
    </header>
  );
}
