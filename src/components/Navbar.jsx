import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const links = [
        { label: 'Home', href: '#home' },
        { label: 'About Us', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Reviews', href: '#reviews' },
        { label: 'Contact', href: '#contact' },
    ]

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="nav-inner container">
                {/* Logo */}
                <a href="#home" className="nav-logo">
                    <span className="logo-trust">TRUST</span>
                    <span className="logo-dot">•</span>
                    <span className="logo-a">A</span>
                    <span className="logo-dot">•</span>
                    <span className="logo-fro">FRO</span>
                    <span className="logo-sub">Moving Co.</span>
                </a>

                {/* Desktop Links */}
                <ul className="nav-links hide-mobile">
                    {links.map(l => (
                        <li key={l.label}>
                            <a href={l.href} className="nav-link">{l.label}</a>
                        </li>
                    ))}
                </ul>

                {/* Phone CTA */}
                <a href="tel:+12088091050" className="btn btn-gold hide-mobile" style={{ fontSize: '0.88rem', padding: '10px 20px' }}>
                    📞 (208) 809-1050
                </a>

                {/* Mobile Hamburger */}
                <button
                    className="hamburger"
                    onClick={() => setMenuOpen(o => !o)}
                    aria-label="Toggle menu"
                >
                    <span className={menuOpen ? 'bar bar--open' : 'bar'} />
                    <span className={menuOpen ? 'bar bar--open bar--mid' : 'bar'} />
                    <span className={menuOpen ? 'bar bar--open' : 'bar'} />
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
                {links.map(l => (
                    <a key={l.label} href={l.href} className="mobile-link" onClick={() => setMenuOpen(false)}>
                        {l.label}
                    </a>
                ))}
                <a href="tel:+12088091050" className="btn btn-gold" style={{ margin: '12px 20px 0' }}>
                    📞 (208) 809-1050
                </a>
            </div>
        </nav>
    )
}
