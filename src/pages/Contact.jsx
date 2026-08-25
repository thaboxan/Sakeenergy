import { useState } from 'react'
import './Contact.css'
import '../index.css'
import SEO from '../components/SEO'

const contactInfo = [
  {
    icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>,
    label: 'Head Office',
    value: 'Sasol SBI, Office 63, Sasolburg, South Africa',
    href: 'https://www.google.com/maps/search/Sasol+SBI,+Office+63,+Sasolburg,+South+Africa',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>,
    label: 'Call Us',
    value: '066 477 8078',
    href: 'tel:0664778078',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>,
    label: 'General Enquiries',
    value: 'sales@sakeenergy.co.za',
    href: 'mailto:sales@sakeenergy.co.za',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1C7.03 1 3 5.03 3 10c0 6.46 8.38 12.53 8.72 12.78a.5.5 0 0 0 .56 0C12.62 22.53 21 16.46 21 10c0-4.97-4.03-9-9-9zm0 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm0 14.5c-2.33 0-4.31-.901-4.997-3.5h9.994C16.31 18.599 14.33 19.5 12 19.5z"/></svg>,
    label: 'Complaints',
    value: 'complaints@sakeenergy.co.za',
    href: 'mailto:complaints@sakeenergy.co.za',
  },
]

const inquiryTypes = [
  'Industrial Automation',
  'Renewable Energy & Backup Power',
  'Valve Supply & Repair',
  'Condition Monitoring',
  'Fire & Flame Suppression',
  'Instrument Testing & Calibration',
  'Electrical Reticulation',
  'Mining Supplies',
  'EPC / Project Management',
  'Training',
  'General Inquiry',
]

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    company: '', inquiryType: '', message: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')
    try {
      const res = await fetch('https://formspree.io/f/xeajbrqg', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          phone: form.phone,
          company: form.company,
          inquiry_type: form.inquiryType,
          message: form.message,
        }),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('success')
        setForm({ firstName: '', lastName: '', email: '', phone: '', company: '', inquiryType: '', message: '' })
      } else {
        setErrorMsg(data?.errors?.[0]?.message || 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.')
      setStatus('error')
    }
  }

  return (
    <>
      <SEO
        title="Contact Us | Get a Free Consultation"
        description="Contact Sake Energy Solutions at our Sasolburg head office. Call +27 66 477 8078 or email sales@sakeenergy.co.za. We serve clients across South Africa and Africa."
        path="/contact"
      />
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow fade-up">Get in Touch</span>
          <h1 className="fade-up fade-up-delay-1">Connect with Us</h1>
          <p className="fade-up fade-up-delay-2">
            Let's shape the future together. Whether you have questions, require our
            expertise, or want to learn more — we're here to help.
          </p>
        </div>
      </section>

      {/* CONTACT BODY */}
      <section className="contact-section">
        <div className="container contact-grid">

          {/* LEFT – info */}
          <div className="contact-info">
            <h2>Connect with Sake Energy Solutions</h2>
            <p>
              At Sake Energy Solutions, we value the power of connection. Reach out
              through any of the channels below and a member of our team will be in
              touch within one business day.
            </p>

            <div className="info-cards">
              {contactInfo.map(ci => (
                <a key={ci.label} href={ci.href} className="info-card" target={ci.label === 'Head Office' ? '_blank' : undefined} rel="noopener noreferrer">
                  <div className="info-card__icon">{ci.icon}</div>
                  <div>
                    <span className="info-card__label">{ci.label}</span>
                    <span className="info-card__value">{ci.value}</span>
                  </div>
                </a>
              ))}
            </div>

            {/* Map embed */}
            <div className="map-wrapper">
              <iframe
                title="Sake Energy Solutions – Sasolburg Head Office"
                src="https://maps.google.com/maps?q=Sasol+SBI+Office+63+Sasolburg+South+Africa&output=embed"
                width="100%"
                height="240"
                style={{ border: 0, borderRadius: 'var(--radius-md)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* RIGHT – form */}
          <div className="contact-form-wrap">
            {status === 'success' ? (
              <div className="form-success">
                <div className="form-success__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="36" height="36"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3>Message Sent!</h3>
                <p>
                  Thank you for reaching out. A member of the Sake Energy Solutions
                  team will be in touch with you within one business day.
                </p>
                <button className="btn btn-primary" onClick={() => setStatus('idle')}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <h3>Tell Us About Your Inquiry</h3>
                <p className="form-sub">Fill in the form below and we'll get back to you promptly.</p>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input id="firstName" name="firstName" type="text" placeholder="John" required value={form.firstName} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input id="lastName" name="lastName" type="text" placeholder="Smith" required value={form.lastName} onChange={handleChange} />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input id="email" name="email" type="email" placeholder="john@company.com" required value={form.email} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" name="phone" type="tel" placeholder="+27 XX XXX XXXX" value={form.phone} onChange={handleChange} />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company / Organisation</label>
                  <input id="company" name="company" type="text" placeholder="Your company name" value={form.company} onChange={handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="inquiryType">Type of Inquiry *</label>
                  <select id="inquiryType" name="inquiryType" required value={form.inquiryType} onChange={handleChange}>
                    <option value="">Select a service area…</option>
                    {inquiryTypes.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" name="message" rows="5" placeholder="Tell us about your project or challenge…" required value={form.message} onChange={handleChange} />
                </div>

                {status === 'error' && (
                  <div className="form-error-banner">{errorMsg}</div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
