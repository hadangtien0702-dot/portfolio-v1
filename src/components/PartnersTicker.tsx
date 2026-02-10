import './PartnersTicker.css';

export function PartnersTicker() {
  const partners = [
    'Supa Blox', 'Hype Blox', 'Frame Blox', 'Ultra Blox',
    'Tech Blox', 'Nova Blox', 'Pixel Blox', 'Core Blox'
  ];

  return (
    <div className="partners-section">
      <p className="partners-title">Trusted by Brands I've Helped Shape</p>
      <div className="partners-ticker">
        <div className="partners-track">
          {[...partners, ...partners].map((partner, index) => (
            <span key={index} className="partner-item">{partner}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
