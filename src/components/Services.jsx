import './Services.css'

const features = [
    'Professional & Experienced Movers',
    'Affordable Hourly Rates',
    'Fast & Reliable Service',
    'Careful With Your Furniture',
    'Over 150+ 5-Star Reviews',
]

export default function Services() {
    return (
        <section id="services" className="section section-light">
            <div className="container services-inner">
                {/* Left Text */}
                <div className="services-text">
                    <span className="section-tag">Our Services</span>
                    <h2 className="section-title">
                        Professional Moving Help<br />
                        in Boise &amp; <span>Across the Valley</span>
                    </h2>
                    <p className="section-sub" style={{ marginBottom: '28px' }}>
                        From labor-only assistance to full-service packaging, you can trust us with
                        all your moving needs in Boise and beyond.
                    </p>
                    <ul className="check-list">
                        {features.map((f, i) => (
                            <li key={i} className="check-item fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
                                <span className="check-icon">✓</span>
                                {f}
                            </li>
                        ))}
                    </ul>
                    <a href="#contact" className="btn btn-gold" style={{ marginTop: '32px', display: 'inline-flex' }}>
                        Get a Free Quote →
                    </a>
                </div>

                {/* Right Card */}
                <div className="services-right">
                    {/* Licensed badge */}
                    <div className="licensed-badge float-anim">
                        <div className="badge-shield">
                            <div className="shield-stars">★★★★★</div>
                            <div className="shield-main">LICENSED<br />&amp; INSURED</div>
                        </div>
                    </div>

                    {/* Google rating */}
                    <div className="google-card">
                        <div className="google-score">5.0</div>
                        <div className="google-stars">★★★★★</div>
                        <div className="google-brand">
                            <svg width="70" height="22" viewBox="0 0 272 92" xmlns="http://www.w3.org/2000/svg">
                                <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335" />
                                <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#FBBC05" />
                                <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#4285F4" />
                                <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853" />
                                <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" fill="#EA4335" />
                                <path d="M35.29 41.41V32h31.96c.31 1.65.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.77.36 15.65 16.32.19 35.55.19c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.17 0 14 10.84 25.17 24.7 25.17 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.74.01z" fill="#4285F4" />
                            </svg>
                            <span style={{ fontSize: '0.82rem', color: 'var(--grey)', fontWeight: 600 }}>Reviews</span>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="stats-row">
                        {[
                            { num: '150+', label: '5-Star Reviews' },
                            { num: '5+', label: 'Years Experience' },
                            { num: '100%', label: 'Satisfaction' },
                        ].map((s, i) => (
                            <div key={i} className="stat-card">
                                <div className="stat-num">{s.num}</div>
                                <div className="stat-label">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
