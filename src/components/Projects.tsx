import './Projects.css';

export function Projects() {
  const projects = [
    {
      title: 'Neon Dreams',
      category: 'Music Video Edit',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'Urban Flow',
      category: 'Commercial Spot',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: 'Tech Vision',
      category: 'Brand Identity',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      title: 'Midnight Sky',
      category: 'Visual Design',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      title: 'Digital Pulse',
      category: 'Art Direction',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      title: 'Future Forms',
      category: 'Brand Strategy',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <h2 className="section-title">Featured Work</h2>
        <p className="section-subtitle">Crafting memorable experiences through design</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image" style={{ background: project.gradient }}>
              <div className="project-overlay">
                <svg className="project-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
