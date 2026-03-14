import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-inner">
                {/* Logo + Tagline */}
                <div className="footer-brand">
                    <div className="footer-logo">
                        <span>TRUST</span>
                        <span className="dot">•</span>
                        <span>A</span>
                        <span className="dot">•</span>
                        <span className="fro">FRO</span>
                        <span className="sub">Moving Co.</span>
                    </div>
                    <p className="footer-tagline">
                        Boise's Most Trusted Moving Company.<br />
                        Fast · Safe · Smooth · Affordable
                    </p>
                    <div className="footer-stars">⭐⭐⭐⭐⭐ <span>5.0 on Google</span></div>
                </div>

                {/* Quick Links */}
                <div className="footer-col">
                    <h4 className="footer-heading">Quick Links</h4>
                    <ul className="footer-links">
                        {['Home', 'About Us', 'Services', 'Contact'].map(l => (
                            <li key={l}><a href={`#${l.toLowerCase().replace(' ', '-')}`}>{l}</a></li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div className="footer-col">
                    <h4 className="footer-heading">Services</h4>
                    <ul className="footer-links">
                        {['Local Moving', 'Long Distance Moving', 'Packing Services', 'Commercial Moving'].map(s => (
                            <li key={s}><a href="#services">{s}</a></li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div className="footer-col">
                    <h4 className="footer-heading">Contact</h4>
                    <ul className="footer-links">
                        <li><a href="tel:+12088091050">📞 (208) 809-1050</a></li>
                        <li><a href="mailto:TrustAFroMoving@gmail.com">✉️ TrustAFroMoving@gmail.com</a></li>
                        <li><span>📍 Boise, ID &amp; Treasure Valley</span></li>
                        <li><span>🕐 Available 7 days a week</span></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <span>© {new Date().getFullYear()} Trust A Fro Moving Co. All rights reserved.</span>
                    <span>Licensed &amp; Insured · Serving Boise &amp; the Treasure Valley</span>
                </div>
            </div>
        </footer>
    )
}
