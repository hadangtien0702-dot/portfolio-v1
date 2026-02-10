import './Hero.css';

export function Hero() {
  const skills = [
    { num: '#01', label: 'Brand Strategy' },
    { num: '#02', label: 'Brand Identity' },
    { num: '#03', label: 'Visual Design' },
    { num: '#04', label: 'Art Direction' }
  ];

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="greeting">
          <span className="greeting-wave">👋</span> Hey, I'm a
        </p>
        <h1 className="headline">
          <span className="headline-line">Creative</span>
          <span className="headline-line">Director</span>
        </h1>

        <div className="hero-stats">
          {skills.map((skill, index) => (
            <div key={index} className="stat-item">
              <span className="stat-num">{skill.num}</span>
              <span className="stat-label">{skill.label}</span>
            </div>
          ))}
        </div>

        <div className="hero-statement">
          <h2>Great design should feel invisible.</h2>
          <p>From logo to language, I build brands that connect and convert.</p>
        </div>

        <div className="hero-cta">
          <button 
            className="cta-button"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </button>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-gradient-orb"></div>
        <div className="hero-grid-pattern"></div>
      </div>
    </section>
  );
}
