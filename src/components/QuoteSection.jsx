import { useState } from 'react'
import './QuoteSection.css'

const sizes = ['Studio/Apt', '1 Bedroom', '2 Bedroom', '3 Bedroom', '4+ Bedroom']

export default function QuoteSection() {
    const [formData, setFormData] = useState({
        name: '', phone: '', email: '', date: '', from: '', size: ''
    })
    const [sent, setSent] = useState(false)

    const handleChange = e => setFormData(p => ({ ...p, [e.target.name]: e.target.value }))

    const handleSubmit = e => {
        e.preventDefault()
        window.location.href = `mailto:TrustAFroMoving@gmail.com?subject=Free Quote Request from ${formData.name}&body=Name: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AMoving Date: ${formData.date}%0AMoving From: ${formData.from}%0AMove Size: ${formData.size}`
        setSent(true)
        setTimeout(() => setSent(false), 4000)
    }

    return (
        <section id="contact" className="section quote-section">
            <div className="container">
                <div className="quote-inner">
                    {/* Left Info */}
                    <div className="quote-info">
                        <span className="section-tag">Free Quote</span>
                        <h2 className="section-title" style={{ color: 'var(--white)' }}>
                            Get Your <span style={{ color: 'var(--gold)' }}>Free Quote</span> Today!
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: '1.7', marginBottom: '32px', maxWidth: '440px' }}>
                            Message us today for a free quote and let us make your next move a breeze!
                            We serve Boise, the Treasure Valley, and beyond.
                        </p>

                        <div className="contact-methods">
                            <a href="mailto:TrustAFroMoving@gmail.com" className="contact-method">
                                <div className="contact-icon">✉️</div>
                                <div>
                                    <div className="contact-label">Email Us</div>
                                    <div className="contact-value">TrustAFroMoving@gmail.com</div>
                                </div>
                            </a>
                            <a href="tel:+12088091050" className="contact-method">
                                <div className="contact-icon">📞</div>
                                <div>
                                    <div className="contact-label">Call Us</div>
                                    <div className="contact-value">(208) 809-1050</div>
                                </div>
                            </a>
                        </div>

                        <div className="availability">
                            <span className="avail-dot" />
                            Available 7 days a week — Serving Boise &amp; the Treasure Valley
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="quote-form-card">
                        <h3 className="form-title">Get Your Free Quote!</h3>
                        {sent ? (
                            <div className="form-success">
                                ✅ Your quote request has been sent! We'll get back to you as soon as we can.
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="quote-form">
                                <div className="form-group">
                                    <label>Full Name *</label>
                                    <input name="name" required value={formData.name} onChange={handleChange}
                                        className="form-input" placeholder="Your full name" />
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Phone Number *</label>
                                        <input name="phone" required value={formData.phone} onChange={handleChange}
                                            className="form-input" placeholder="(208) 000-0000" type="tel" />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input name="email" value={formData.email} onChange={handleChange}
                                            className="form-input" placeholder="you@email.com" type="email" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Moving Date *</label>
                                        <input name="date" required value={formData.date} onChange={handleChange}
                                            className="form-input" type="date" />
                                    </div>
                                    <div className="form-group">
                                        <label>Moving From *</label>
                                        <input name="from" required value={formData.from} onChange={handleChange}
                                            className="form-input" placeholder="City, State" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Move Size *</label>
                                    <div className="size-options">
                                        {sizes.map(s => (
                                            <label key={s} className={`size-opt ${formData.size === s ? 'size-opt--active' : ''}`}>
                                                <input type="radio" name="size" value={s} onChange={handleChange} style={{ display: 'none' }} />
                                                {s}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center', fontSize: '1rem', padding: '16px' }}>
                                    🚛 Get Free Quote
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
