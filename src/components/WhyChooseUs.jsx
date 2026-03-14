import './WhyChooseUs.css'

const cards = [
    {
        icon: '🏠',
        title: 'Local Moving',
        desc: 'Short-distance moves throughout Boise and nearby areas. Fast, careful, and stress-free.',
    },
    {
        icon: '🚛',
        title: 'Long Distance Moving',
        desc: 'Moves across Idaho and interstate long-distance moving. Your belongings arrive safely.',
    },
    {
        icon: '📦',
        title: 'Packing Services',
        desc: 'Careful packing of your home to ensure everything arrives safely and intact.',
    },
]

export default function WhyChooseUs() {
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="wcu-header">
                    <span className="section-tag">Why Choose Us</span>
                    <h2 className="section-title">
                        Why Choose <span>Trust A Fro</span> Moving
                    </h2>
                    <p className="section-sub">
                        Professional Moving Help in Boise &amp; Across the Treasure Valley
                    </p>
                </div>

                <div className="wcu-cards">
                    {cards.map((card, i) => (
                        <div key={i} className="wcu-card fade-up" style={{ animationDelay: `${i * 0.12}s` }}>
                            <div className="wcu-icon">{card.icon}</div>
                            <h3 className="wcu-title">{card.title}</h3>
                            <p className="wcu-desc">{card.desc}</p>
                            <a href="#contact" className="wcu-link">
                                Learn More <span className="wcu-arrow">→</span>
                            </a>
                        </div>
                    ))}
                </div>

                {/* Trust bar */}
                <div className="trust-bar">
                    {['Fast & Affordable', 'Licensed & Insured', 'No Hidden Fees', '130+ 5-Star Reviews'].map((t, i) => (
                        <div key={i} className="trust-item">
                            <span className="check-icon" style={{ background: 'var(--gold)', color: 'var(--navy)' }}>✓</span>
                            <span>{t}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
