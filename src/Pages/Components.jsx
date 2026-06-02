import './Components.css'

const COMPONENT_EXAMPLES = [
  { id: 'tag-ts', label: 'TypeScript', color: '#3178C6' },
  { id: 'tag-react', label: 'React', color: '#61DAFB' },
  { id: 'tag-node', label: 'Node.js', color: '#83CD29' },
  { id: 'tag-next', label: 'Next.js', color: '#fff' },
]

export default function Components() {
  return (
    <section className="components-page section">
      <div className="container">
        <h1 className="components-page__title">Components</h1>
        <p className="components-page__sub">
          Design system primitives used throughout the portfolio.
        </p>

        {/* Tags */}
        <div className="comp-section">
          <h2 className="section-label">Tech Tags</h2>
          <div className="comp-row">
            {COMPONENT_EXAMPLES.map((t) => (
              <span key={t.id} className="comp-tag">
                <span className="comp-tag__dot" style={{ background: t.color }} />
                {t.label}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="comp-section">
          <h2 className="section-label">Buttons</h2>
          <div className="comp-row">
            <button className="comp-btn comp-btn--primary" id="btn-primary-demo">Primary Action</button>
            <button className="comp-btn comp-btn--ghost" id="btn-ghost-demo">Ghost Button</button>
          </div>
        </div>

        {/* Cards */}
        <div className="comp-section">
          <h2 className="section-label">Card</h2>
          <div className="comp-card" id="card-demo">
            <p className="comp-card__text">
              A minimal card component with subtle border and surface background.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
