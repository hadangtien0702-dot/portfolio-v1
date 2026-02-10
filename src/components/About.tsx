import './About.css';

export function About() {
  const stats = [
    { value: '50+', label: 'Projects Completed' },
    { value: '30+', label: 'Happy Clients' },
    { value: '5+', label: 'Years Experience' }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">Behind the Designs</h2>
          <div className="about-text">
            <p>
              I'm a product designer focused on building clean, intuitive interfaces that users love. 
              With a passion for minimalism and attention to detail, I transform complex problems into 
              elegant solutions.
            </p>
            <p>
              My approach combines strategic thinking with creative execution, ensuring every project 
              not only looks beautiful but also drives real business results.
            </p>
          </div>

          <div className="about-stats">
            {stats.map((stat, index) => (
              <div key={index} className="about-stat">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-text">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-visual">
          <div className="visual-card">
            <div className="card-gradient"></div>
            <div className="card-content">
              <div className="skill-tag">UI/UX Design</div>
              <div className="skill-tag">Brand Identity</div>
              <div className="skill-tag">Art Direction</div>
              <div className="skill-tag">Visual Design</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
