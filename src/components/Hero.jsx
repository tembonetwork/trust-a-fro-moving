import './Hero.css'

export default function Hero() {
    return (
        <section id="home" className="hero">
            {/* Background overlay */}
            <div className="hero-bg" />

            <div className="container hero-inner">
                {/* Left Content */}
                <div className="hero-content">
                    <div className="section-tag fade-up">⭐ Boise's #1 Rated Movers</div>
                    <h1 className="hero-title fade-up fade-up-d1">
                        Boise's Most <span className="gold-text">Trusted</span><br />
                        Moving Company
                    </h1>
                    <p className="hero-sub fade-up fade-up-d2">
                        Fast, Affordable &amp; Professional Movers in Boise and the Treasure Valley.
                        We make everything easier for you — big or small, near or far.
                    </p>

                    <div className="hero-actions fade-up fade-up-d3">
                        <a href="#contact" className="btn btn-gold">Get Free Quote</a>
                        <a href="tel:+12088091050" className="btn btn-outline">📞 Call Now</a>
                    </div>

                    <ul className="check-list fade-up fade-up-d4" style={{ marginTop: '28px' }}>
                        {[
                            'Local &amp; Long Distance Moving',
                            'Licensed &amp; Insured',
                            '5-Star Rated Service',
                            'Residential &amp; Commercial',
                        ].map((item, i) => (
                            <li key={i} className="check-item">
                                <span className="check-icon">✓</span>
                                <span dangerouslySetInnerHTML={{ __html: item }} />
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Image */}
                <div className="hero-image-wrap fade-up fade-up-d2">
                    <img
                        src={`${import.meta.env.BASE_URL}hero-movers.png`}
                        alt="Trust A Fro Moving team loading a truck"
                        className="hero-img"
                    />
                    {/* Floating badge */}
                    <div className="hero-badge float-anim">
                        <div className="badge-stars">⭐⭐⭐⭐⭐</div>
                        <div className="badge-label">5.0 Google Rating</div>
                        <div className="badge-count">150+ Reviews</div>
                    </div>
                </div>
            </div>

            {/* Wave */}
            <div className="hero-wave">
                <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#F8F9FB" d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
                </svg>
            </div>
        </section>
    )
}
