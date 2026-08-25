import { Link } from 'react-router-dom'
import './About.css'
import '../index.css'
import logoAccred from '../assets/Logo with Accreditations.png'

const values = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: 'Excellence',
    desc: 'We set the bar high — in every project, every interaction, every deliverable.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3M6.343 6.343l-.707-.707M12 21v-1m-6.364-1.636l.707-.707M18.364 18.364l-.707-.707"/><circle cx="12" cy="12" r="4"/></svg>,
    title: 'Innovation',
    desc: 'We constantly push the boundaries of what is possible in engineering solutions.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    title: 'Partnership',
    desc: 'We build lasting relationships grounded in trust, transparency, and mutual growth.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
    title: 'Growth',
    desc: 'We champion the sustainable growth of our clients, our people, and our continent.',
  },
]

const countries = [
  { name: 'South Africa', role: 'Headquarters', flag: '🇿🇦' },
  { name: 'Tanzania', role: 'Branch Office', flag: '🇹🇿' },
  { name: 'Zambia', role: 'Branch Office', flag: '🇿🇲' },
  { name: 'Kenya', role: 'Partner Network', flag: '🇰🇪' },
  { name: 'Mozambique', role: 'Partner Network', flag: '🇲🇿' },
  { name: 'Namibia', role: 'Partner Network', flag: '🇳🇦' },
]

const milestones = [
  { year: '2016', event: 'Sake Energy Solutions founded in Sasolburg, South Africa' },
  { year: '2018', event: 'Expanded into renewable energy and IPP services' },
  { year: '2020', event: 'Opened offices in Tanzania and Zambia' },
  { year: '2022', event: 'Achieved ISO 9001 and ISO 45001 certification' },
  { year: '2023', event: 'Expanded partner network across 6 African countries' },
  { year: '2024', event: 'Launched BOGM model for turnkey renewable energy projects' },
]

export default function About() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow fade-up">Our Story</span>
          <h1 className="fade-up fade-up-delay-1">Journeying Together<br />Since 2016</h1>
          <p className="fade-up fade-up-delay-2">
            Engineering brilliance. Unwavering commitment. One mission: Empowering
            industries to surpass their potential across Africa.
          </p>
        </div>
      </section>

      {/* GENESIS */}
      <section className="genesis">
        <div className="container genesis-grid">
          <div className="genesis-text">
            <span className="eyebrow">Our Genesis</span>
            <div className="accent-line" />
            <h2>From a Vision to a Pan-African Vanguard</h2>
            <p>
              Sake Energy Solutions was born out of the imperative need to address
              manufacturing process challenges, energy losses, and production downtimes.
              Over the years, our mission expanded, our team grew, and our solutions
              became more diverse — yet our commitment to excellence remained constant.
            </p>
            <p style={{ marginTop: 16 }}>
              Today, we operate across six African nations, delivering transformative
              engineering solutions to industries ranging from mining and petrochemicals
              to food processing and manufacturing.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ marginTop: 32 }}>
              Partner With Us
            </Link>
          </div>
          <div className="genesis-image">
            <img
              src="https://sakeenergy.co.za/wp-content/uploads/2023/10/ezgif.com-gif-maker.webp"
              alt="Engineering excellence"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CEO */}
      <section className="bg-light ceo-section">
        <div className="container ceo-grid">
          <div className="ceo-image">
            <img
              src="https://sakeenergy.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-06-at-17.57.34.jpg"
              alt="Nthabiseng Serite – CEO, Sake Energy Solutions"
              loading="lazy"
            />
          </div>
          <div className="ceo-text">
            <span className="eyebrow">Meet the Visionary</span>
            <div className="accent-line" />
            <h2>Nthabiseng Serite</h2>
            <p className="ceo-role">Founder &amp; CEO</p>
            <p>
              With two decades in the renewable energy and automation sector,
              Nthabiseng's expertise and passion drive our endeavors. A celebrated global
              speaker and consultant, her leadership steers Sake Energy Solutions towards
              new horizons.
            </p>
            <p style={{ marginTop: 16 }}>
              Her vision of a self-sufficient, industrially-advanced Africa is the
              beating heart of every solution we design and every partnership we forge.
            </p>
            <div className="ceo-tags">
              <span>Renewable Energy</span>
              <span>Industrial Automation</span>
              <span>Global Speaker</span>
              <span>Pan-African Advocate</span>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-header centered">
            <span className="eyebrow">Our Journey</span>
            <div className="accent-line centered" />
            <h2>Key Milestones</h2>
          </div>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div key={m.year} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-content">
                  <div className="timeline-year">{m.year}</div>
                  <p>{m.event}</p>
                </div>
                <div className="timeline-dot" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="bg-light certs-section">
        <div className="container">
          <div className="section-header centered">
            <span className="eyebrow">Quality Assurance</span>
            <div className="accent-line centered" />
            <h2>Internationally Recognised Certifications</h2>
            <p>
              Our commitment to quality, safety, and operational excellence is backed by
              internationally recognised ISO certifications and B-BBEE status.
            </p>
          </div>
          <div className="certs-logo-wrap">
            <img
              src={logoAccred}
              alt="Sake Energy Solutions – ISO 9001, ISO 45001, SACAS Accredited, Level 1 B-BBEE"
              className="certs-logo-img"
            />
          </div>
          <div className="cert-cards">
            <div className="cert-card">
              <div className="cert-badge">ISO 9001</div>
              <h3>Quality Management System</h3>
              <p>
                Consistent service delivery and continuous improvement across every
                part of our business operations.
              </p>
            </div>
            <div className="cert-card">
              <div className="cert-badge">ISO 45001</div>
              <h3>Occupational Health &amp; Safety</h3>
              <p>
                Demonstrating our focus on compliance and employee wellbeing across
                all operational environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-dark values-section">
        <div className="container">
          <div className="section-header centered">
            <span className="eyebrow">Our Commitment</span>
            <div className="accent-line centered" />
            <h2>Driven by Values, Committed to Progress</h2>
            <p>
              Our values are the bedrock upon which Sake Energy Solutions stands —
              through dedication to excellence, relentless innovation, and growth.
            </p>
          </div>
          <div className="grid-4">
            {values.map(v => (
              <div key={v.title} className="value-card">
                <div className="icon-circle">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAN-AFRICAN */}
      <section className="africa-section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Pan-African Presence</span>
            <div className="accent-line" />
            <h2>Spreading Excellence Across Africa</h2>
            <p>
              Our roots are in South Africa, but our services know no boundaries on
              the African continent. With branches and partner networks across six
              nations, we bridge distances and forge strategic alliances.
            </p>
          </div>
          <div className="country-grid">
            {countries.map(c => (
              <div key={c.name} className="country-card">
                <span className="country-flag">{c.flag}</span>
                <div>
                  <strong>{c.name}</strong>
                  <span>{c.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark" style={{ padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Together, Let's Engineer the Future</h2>
          <p style={{ margin: '16px auto 32px', maxWidth: 520 }}>
            Become a part of our journey. Let's embrace challenges, harness
            opportunities, and craft success stories that last.
          </p>
          <Link to="/contact" className="btn btn-primary">Connect With Us →</Link>
        </div>
      </section>
    </>
  )
}
