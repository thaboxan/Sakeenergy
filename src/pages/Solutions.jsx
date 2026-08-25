import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Solutions.css'
import '../index.css'

const categories = ['All', 'Industrial', 'Energy', 'Safety & Testing', 'Project Services']

const services = [
  {
    id: 1,
    category: 'Industrial',
    title: 'Industrial Automation',
    desc: 'Harness technology\'s transformative power with our advanced industrial automation services. Replace tedious manual tasks with precise and efficient automated solutions.',
    image: 'https://sakeenergy.co.za/wp-content/uploads/2023/08/industry-arm-automation-robot-machine-for-using-in-2022-09-28-22-52-17-utc-scaled.jpg',
    features: ['PLC & SCADA Systems', 'Process Control', 'Remote Monitoring', 'System Integration'],
  },
  {
    id: 2,
    category: 'Energy',
    title: 'Renewable Energy & Backup Power',
    desc: 'Powering the future. Dive into sustainable energy solutions and reliable backup systems that keep you operational, always.',
    image: 'https://sakeenergy.co.za/wp-content/uploads/2023/08/renewable-energy-resources-2022-11-01-04-35-15-utc-scaled.jpg',
    features: ['Solar PV Systems', 'Battery Storage (BESS)', 'Generator Backup', 'Grid-Tie Solutions'],
  },
  {
    id: 3,
    category: 'Industrial',
    title: 'Valve Supply & Repair',
    desc: 'Our valve supply and repair services are built on excellence. Experience durability, functionality, and unwavering support every step of the way.',
    image: 'https://sakeenergy.co.za/wp-content/uploads/2023/07/pipelines-valves-at-gas-plant-2023-01-03-20-15-13-utc-scaled.jpg',
    features: ['Control Valves', 'Safety Valves', 'On-site Repair', 'Valve Actuators'],
  },
  {
    id: 4,
    category: 'Safety & Testing',
    title: 'Condition Monitoring Systems',
    desc: 'Stay ahead of potential issues. Our condition monitoring systems provide insights, predicting failures before they strike.',
    image: 'https://sakeenergy.co.za/wp-content/uploads/2023/07/monitoring-a3ac1ad0d2d23acd83171adc9fcf10a3.png',
    features: ['Vibration Analysis', 'Thermal Imaging', 'Oil Analysis', 'Ultrasound Detection'],
  },
  {
    id: 5,
    category: 'Safety & Testing',
    title: 'Fire & Flame Suppression Systems',
    desc: 'Safety first. Our fire and flame suppression systems act promptly, guarding assets and lives against unforeseen fire hazards.',
    image: 'https://sakeenergy.co.za/wp-content/uploads/2023/07/engineer-or-technician-work-checking-fire-suppress-2022-11-17-12-16-31-utc-scaled.jpg',
    features: ['Fire Detection', 'Suppression Design', 'System Testing', 'SANS Compliant'],
  },
  {
    id: 6,
    category: 'Safety & Testing',
    title: 'Instrument Testing & Calibrations',
    desc: 'Accuracy matters. Our instrument testing and calibration services guarantee measurements you can trust, every time.',
    image: 'https://sakeenergy.co.za/wp-content/uploads/2023/09/Depositphotos_133009882_L.jpg',
    features: ['Flow Measurement', 'Pressure Calibration', 'Temperature Sensors', 'SANAS Accredited'],
  },
  {
    id: 7,
    category: 'Industrial',
    title: 'Electrical Reticulation & Panels',
    desc: 'Electrical power distribution from the main power source to the various electrical loads within your facility.',
    image: 'https://sakeenergy.co.za/wp-content/uploads/2023/09/Depositphotos_640088216_L.jpg',
    features: ['MV/LV Distribution', 'MCC & DB Panels', 'Cable Management', 'Load Studies'],
  },
  {
    id: 8,
    category: 'Industrial',
    title: 'Mining Supplies',
    desc: 'From drilling equipment to ventilation systems, we provide everything you need for efficient mining operations.',
    image: 'https://sakeenergy.co.za/wp-content/uploads/2023/07/mining-f5a06976b967ac121a90354c3d583d18.jpeg',
    features: ['Drilling Equipment', 'Ventilation Systems', 'Safety Equipment', 'Consumables'],
  },
  {
    id: 9,
    category: 'Project Services',
    title: 'EPC Services',
    desc: 'Our EPC services encompass the design, procurement, construction, and commissioning of facilities with precision and excellence.',
    image: 'https://sakeenergy.co.za/wp-content/uploads/2023/08/oil-refinery-plant-from-industry-zone-oil-and-gas-E5HABQN-e1676866622808.jpg',
    features: ['Engineering Design', 'Procurement', 'Construction', 'Commissioning'],
  },
  {
    id: 10,
    category: 'Project Services',
    title: 'Project Management',
    desc: 'With meticulous planning, execution, and oversight, we ensure your projects stay on schedule and within budget.',
    image: 'https://sakeenergy.co.za/wp-content/uploads/2023/08/young-professional-team-discussing-business-plan-i-2022-01-19-00-13-03-utc-scaled.jpg',
    features: ['Risk Management', 'Schedule Control', 'Quality Assurance', 'Stakeholder Reporting'],
  },
  {
    id: 11,
    category: 'Energy',
    title: 'IPP (Independent Power Producer)',
    desc: 'We own and manage power plants to generate electricity from renewable sources, selling to utilities and industrial customers.',
    image: 'https://sakeenergy.co.za/wp-content/uploads/2023/08/renewable-energy-generation-2022-12-17-03-42-26-utc-scaled.jpg',
    features: ['Power Generation', 'PPA Agreements', 'Grid Connection', 'O&M Services'],
  },
  {
    id: 12,
    category: 'Project Services',
    title: 'Feasibility Studies',
    desc: 'In-depth feasibility studies provide a clear pathway, assessing risks, cost implications, and projected return on investment.',
    image: 'https://sakeenergy.co.za/wp-content/uploads/2023/08/young-professional-team-discussing-business-plan-i-2022-01-19-00-13-03-utc-scaled.jpg',
    features: ['Technical Assessment', 'Financial Modelling', 'Risk Analysis', 'ROI Projections'],
  },
  {
    id: 13,
    category: 'Project Services',
    title: 'Training',
    desc: 'Empower your team with our custom training sessions. Led by industry experts, we walk the journey with you.',
    image: 'https://sakeenergy.co.za/wp-content/uploads/2023/07/training-263243d5f574f75c38dd0bb49478517c.jpeg',
    features: ['Automation Training', 'Safety Compliance', 'Custom Curricula', 'On-site Delivery'],
  },
  {
    id: 14,
    category: 'Energy',
    title: 'BOGM – Build, Own, Generate & Maintain',
    desc: 'We take charge of the entire lifecycle of your renewable energy project — from building to maintaining infrastructure.',
    image: 'https://sakeenergy.co.za/wp-content/uploads/2023/08/renewable-energy-engineer-working-on-wind-turbine-2023-02-21-03-46-06-utc-scaled.jpg',
    features: ['Full Lifecycle', 'No Capital Outlay', 'Performance Guaranteed', 'Long-term O&M'],
  },
]

export default function Solutions() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? services : services.filter(s => s.category === active)

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow fade-up">What We Offer</span>
          <h1 className="fade-up fade-up-delay-1">Our Comprehensive<br />Engineering Solutions</h1>
          <p className="fade-up fade-up-delay-2">
            We develop creative, comprehensive, and sustainable engineering solutions
            for a future where society can thrive.
          </p>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section className="solutions-section">
        <div className="container">
          <div className="filter-bar">
            {categories.map(c => (
              <button
                key={c}
                className={`filter-btn ${active === c ? 'active' : ''}`}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="solutions-grid">
            {filtered.map(s => (
              <div key={s.id} className="solution-card">
                <div className="solution-card__image">
                  <img src={s.image} alt={s.title} loading="lazy" />
                  <div className="solution-card__category">{s.category}</div>
                </div>
                <div className="solution-card__body">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <ul className="solution-features">
                    {s.features.map(f => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOT SURE BANNER */}
      <section className="bg-light not-sure-section">
        <div className="container not-sure-inner">
          <div className="not-sure-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          </div>
          <div>
            <h2>Not Sure What You Need?</h2>
            <p>
              Every project is unique, and so are its challenges. Let our team guide
              you to the service best suited to your requirements.
            </p>
          </div>
          <Link to="/contact" className="btn btn-primary" style={{ flexShrink: 0 }}>
            Consult Our Experts →
          </Link>
        </div>
      </section>
    </>
  )
}
