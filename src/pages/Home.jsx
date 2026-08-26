import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import '../index.css'
import SEO from '../components/SEO'
import eskomLogo from '../assets/eskom-hld-soc-seeklogo.svg'
import arcelorMittalLogo from '../assets/ArcelorMittal_idtAAJr4-U_0.svg'

const stats = [
  { value: '20+', label: 'Years of Experience' },
  { value: '500+', label: 'Projects Delivered' },
  { value: '6', label: 'African Countries' },
  { value: '100%', label: 'Client Commitment' },
]

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
    ),
    title: 'Industrial Automation',
    desc: 'Replace tedious manual tasks with precise, efficient automated solutions using the latest technology.',
    img: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
    ),
    title: 'Renewable Energy',
    desc: 'Sustainable energy solutions and reliable backup systems that keep your operations running, always.',
    img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
    title: 'Condition Monitoring',
    desc: 'Stay ahead of potential failures with real-time insights and predictive maintenance systems.',
    img: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
    ),
    title: 'EPC & Project Management',
    desc: 'End-to-end engineering, procurement, and construction services delivered on time and within budget.',
    img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
    ),
    title: 'Valve Supply & Repair',
    desc: 'Excellence in valve supply and repair services – durability, functionality, and unwavering support.',
    img: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
    ),
    title: 'Instrument Testing',
    desc: 'Guaranteed accuracy in all measurements through professional testing and calibration services.',
    img: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=800&q=80',
  },
]

const phases = [
  {
    num: '01',
    title: 'Consultation & Diagnosis',
    desc: 'We listen, analyze, and diagnose your operational challenges to form a clear picture of what solutions will deliver the most value.',
  },
  {
    num: '02',
    title: 'Custom Solution Design',
    desc: 'Our engineers craft a tailored solution specifically designed around your unique environment, goals, and constraints.',
  },
  {
    num: '03',
    title: 'Implementation & Training',
    desc: 'We deploy with precision and ensure your team is fully empowered to operate and maintain the new systems with confidence.',
  },
]

// Free Client ID from https://developers.brandfetch.com/register — set VITE_BRANDFETCH_CLIENT_ID in .env
const BRANDFETCH_CLIENT_ID = import.meta.env.VITE_BRANDFETCH_CLIENT_ID

const clients = [
  { name: 'Sasol', domain: 'sasol.com' },
  { name: 'Anglo American', domain: 'angloamerican.com' },
  { name: 'Eskom', logo: eskomLogo },
  { name: 'ArcelorMittal', logo: arcelorMittalLogo },
  { name: 'Transnet', domain: 'transnet.net' },
]

const heroSlides = [
  'https://sakeenergy.co.za/wp-content/uploads/2023/08/industry-arm-automation-robot-machine-for-using-in-2022-09-28-22-52-17-utc-scaled.jpg',
  'https://sakeenergy.co.za/wp-content/uploads/2023/08/renewable-energy-resources-2022-11-01-04-35-15-utc-scaled.jpg',
  'https://sakeenergy.co.za/wp-content/uploads/2023/07/pipelines-valves-at-gas-plant-2023-01-03-20-15-13-utc-scaled.jpg',
  'https://sakeenergy.co.za/wp-content/uploads/2023/08/oil-refinery-plant-from-industry-zone-oil-and-gas-E5HABQN-e1676866622808.jpg',
  'https://sakeenergy.co.za/wp-content/uploads/2023/08/renewable-energy-engineer-working-on-wind-turbine-2023-02-21-03-46-06-utc-scaled.jpg',
]

export default function Home() {
  const [failedLogos, setFailedLogos] = useState(() => new Set())

  return (
    <>
      <SEO
        path="/"
        description="Sake Energy Solutions delivers industrial automation, renewable energy, EPC, and engineering services across Africa. ISO 9001 & ISO 45001 certified. Headquartered in Sasolburg, South Africa."
      />
      {/* HERO */}
      <section className="hero">
        <div className="hero__slideshow">
          {heroSlides.map((url, i) => (
            <div
              key={i}
              className={`hero__slide${i === 0 ? ' hero__slide--first' : ''}`}
              style={{
                backgroundImage: `url(${url})`,
                animationDelay: `${i * 5}s`,
              }}
            />
          ))}
          <div className="hero__overlay" />
        </div>
        <div className="container hero__content">
          <div className="hero__text fade-up">
            <span className="eyebrow">Africa's Engineering Partner</span>
            <h1>
              Energizing Your <span className="hero__highlight">Processes</span>,<br />
              Empowering Your Progress
            </h1>
            <p>
              We're not just about solutions. We're about revolutions in automation,
              efficiency, and sustainability across the African continent.
            </p>
            <div className="hero__actions">
              <Link to="/solutions" className="btn btn-primary">Discover Our Solutions</Link>
              <Link to="/about" className="btn btn-outline">Our Story</Link>
            </div>
          </div>
          <div className="hero__stats fade-up fade-up-delay-2">
            {stats.map(s => (
              <div key={s.label} className="hero__stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero__scroll-indicator">
          <div className="scroll-dot" />
        </div>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section className="problem-solution">
        <div className="container ps-grid">
          <div className="ps-card ps-card--problem">
            <span className="eyebrow">The Problem</span>
            <h2>Are Process Downtimes Holding You Back?</h2>
            <p>
              The modern industrial landscape is evolving rapidly. Downtimes, energy
              losses, and efficiency hurdles shouldn't hinder your progress. We recognize
              these challenges and are primed to address them head-on.
            </p>
            <ul className="ps-list">
              <li>Unplanned equipment failures</li>
              <li>High energy costs &amp; waste</li>
              <li>Manual processes limiting scale</li>
              <li>Compliance &amp; safety risks</li>
            </ul>
          </div>
          <div className="ps-card ps-card--solution">
            <span className="eyebrow" style={{ color: 'var(--orange)' }}>Our Solution</span>
            <h2 style={{ color: 'var(--white)' }}>Tailored Engineering Solutions for the Modern Age</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)' }}>
              Harness the power of automation, remote monitoring, renewable energy, and
              more. Our comprehensive solutions are designed around your unique
              operational challenges.
            </p>
            <Link to="/solutions" className="btn btn-primary" style={{ marginTop: 8 }}>
              Explore Solutions →
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-light">
        <div className="container">
          <div className="section-header centered">
            <span className="eyebrow">What We Offer</span>
            <div className="accent-line centered" />
            <h2>Our Premium Services</h2>
            <p>
              Delivering unparalleled engineering and technical services across Africa —
              your partner in holistic industrial solutions.
            </p>
          </div>
          <div className="grid-3 services-grid">
            {services.map(s => (
              <div key={s.title} className="service-card">
                <div className="service-card__media">
                  <img src={s.img} alt={s.title} loading="lazy" />
                  <div className="service-card__icon">{s.icon}</div>
                </div>
                <div className="service-card__body">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/solutions" className="btn btn-outline-dark">View All Services</Link>
          </div>
        </div>
      </section>

      {/* PROCESS – 3 PHASES */}
      <section className="bg-dark phases-section">
        <div className="container">
          <div className="section-header centered">
            <span className="eyebrow">How It Works</span>
            <div className="accent-line centered" />
            <h2>Unlocking Success in Three Phases</h2>
            <p>
              Streamlined simplicity. A transformative partnership that turns
              operational bottlenecks into milestones of success.
            </p>
          </div>
          <div className="phases-grid">
            {phases.map((ph, i) => (
              <div key={ph.num} className="phase-card">
                <div className="phase-number">{ph.num}</div>
                {i < phases.length - 1 && <div className="phase-connector hide-mobile" />}
                <h3>{ph.title}</h3>
                <p>{ph.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="about-teaser">
        <div className="container at-grid">
          <div className="at-text">
            <span className="eyebrow">Sake Energy Solutions</span>
            <div className="accent-line" />
            <h2>Pioneering Progress Since 2016</h2>
            <p>
              Two decades of deep-rooted industry expertise. A commitment to partnership,
              progress, and unparalleled service. At Sake Energy Solutions, we are more
              than just solution providers — we are architects of your success.
            </p>
            <p style={{ marginTop: 16 }}>
              Led by <strong>Nthabiseng Serite</strong>, a celebrated global speaker and
              consultant in renewable energy and automation, our team brings
              transformative impact to industries across Africa.
            </p>
            <div style={{ marginTop: 32, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link to="/about" className="btn btn-primary">Learn More About Us</Link>
              <Link to="/contact" className="btn btn-outline-dark">Get in Touch</Link>
            </div>
          </div>
          <div className="at-image">
            <div className="at-image-inner">
              <img
                src="https://sakeenergy.co.za/wp-content/uploads/2023/10/ezgif.com-gif-maker.webp"
                alt="Sake Energy Solutions team at work"
                loading="lazy"
              />
              <div className="at-badge">
                <strong>ISO 9001</strong>
                <span>&amp; ISO 45001</span>
                <span>Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="bg-light clients-section">
        <div className="container">
          <p className="clients-label">Trusted by leading African industries</p>
          <div className="clients-track">
            {clients.map(c => {
              const showBrandfetch = !c.logo && BRANDFETCH_CLIENT_ID && !failedLogos.has(c.name)
              return (
                <div key={c.name} className="client-logo-wrap">
                  {c.logo ? (
                    <img src={c.logo} alt={c.name} className="client-logo-img" loading="lazy" />
                  ) : showBrandfetch ? (
                    <img
                      src={`https://cdn.brandfetch.io/${c.domain}?c=${BRANDFETCH_CLIENT_ID}`}
                      alt={c.name}
                      className="client-logo-img"
                      loading="lazy"
                      onError={() => setFailedLogos(prev => new Set(prev).add(c.name))}
                      onLoad={e => {
                        // Brandfetch returns a tiny generic placeholder (not an error) when it has no real logo
                        if (e.currentTarget.naturalWidth < 100) setFailedLogos(prev => new Set(prev).add(c.name))
                      }}
                    />
                  ) : (
                    <span className="client-logo-name">{c.name}</span>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <div>
            <h2>Set the Stage for Operational Renaissance</h2>
            <p>
              With Sake Energy Solutions at your side, embark on a path carved in
              efficiency, innovation, and unparalleled growth.
            </p>
          </div>
          <Link to="/contact" className="btn btn-primary" style={{ flexShrink: 0 }}>
            Ignite Your Success Journey →
          </Link>
        </div>
      </section>
    </>
  )
}
