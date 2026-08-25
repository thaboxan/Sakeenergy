import { Link } from 'react-router-dom'
import logo from '../assets/LOGO-300x141.png'
import logoAccred from '../assets/Logo with Accreditations.png'
import './Footer.css'

const services = [
  'Industrial Automation',
  'Renewable Energy & Backup Power',
  'Valve Supply & Repair',
  'Condition Monitoring Systems',
  'Fire & Flame Suppression',
  'Instrument Testing & Calibrations',
  'Electrical Reticulation & Panels',
  'Mining Supplies',
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo">
            <img src={logo} alt="Sake Energy Solutions" className="footer__logo-img" />
          </div>
          <p>
            Energizing your processes, empowering your progress. Two decades of
            deep-rooted engineering expertise across Africa.
          </p>
          <div className="footer__social">
            <a href="https://www.linkedin.com/company/sake-energy-solutions" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
            </a>
            <a href="mailto:sales@sakeenergy.co.za" aria-label="Email">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div className="footer__col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/solutions">Solutions</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer__col">
          <h4>Services</h4>
          <ul>
            {services.map(s => (
              <li key={s}><Link to="/solutions">{s}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer__col">
          <h4>Contact</h4>
          <ul className="footer__contact-list">
            <li>
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              <span>Sasol SBI, Office 63<br />Sasolburg, South Africa</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              <a href="tel:0664778078">066 477 8078</a>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
              <a href="mailto:sales@sakeenergy.co.za">sales@sakeenergy.co.za</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} Sake Energy Solutions (Pty) Ltd. All rights reserved.</p>
          <p>Registered in South Africa · ISO 9001 &amp; ISO 45001 Certified</p>
        </div>
      </div>
    </footer>
  )
}
