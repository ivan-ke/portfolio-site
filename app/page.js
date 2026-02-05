'use client'

import { useState } from 'react'
import { 
  Calendar, Download, ExternalLink, Mail, Linkedin, Phone, 
  Award, Users, TrendingUp, Clock, CheckCircle, ArrowRight,
  Briefcase, Target, BarChart3, Globe, Menu, X
} from 'lucide-react'

// ============================================
// COMPONENT: Metric Chip
// ============================================
const MetricChip = ({ value, label, positive = true }) => (
  <div className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium transition-all hover:scale-105 ${
    positive 
      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
      : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
  }`}>
    <span className="font-mono font-bold mr-1">{value}</span>
    <span className="text-xs opacity-80">{label}</span>
  </div>
)

// ============================================
// COMPONENT: Case Study Card
// ============================================
const CaseCard = ({ title, metrics, tags, description, timeline }) => (
  <div className="bg-gray-800/50 backdrop-blur rounded-xl p-6 border border-gray-700/50 hover-card cursor-pointer group">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">{title}</h3>
      <div className="text-sm text-gray-400 font-mono">{timeline}</div>
    </div>
    <div className="flex flex-wrap gap-2 mb-4">
      {metrics.map((metric, idx) => (
        <MetricChip key={idx} value={metric.value} label={metric.label} positive={metric.positive !== false} />
      ))}
    </div>
    <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag, idx) => (
        <span key={idx} className="px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded-md border border-gray-600/30">
          {tag}
        </span>
      ))}
    </div>
    <button className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
      Read Case Study <ArrowRight size={16} />
    </button>
  </div>
)

// ============================================
// COMPONENT: Service Card
// ============================================
const ServiceCard = ({ title, timeline, description, deliverables, successMetric }) => (
  <div className="bg-gray-800/50 backdrop-blur rounded-xl p-6 border border-gray-700/50 hover-card">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <div className="flex items-center text-gray-400 text-sm font-mono">
        <Clock size={16} className="mr-1" />
        {timeline}
      </div>
    </div>
    <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
    <div className="mb-4">
      <h4 className="text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Deliverables</h4>
      <ul className="space-y-2">
        {deliverables.map((item, idx) => (
          <li key={idx} className="flex items-start text-gray-300">
            <CheckCircle size={16} className="text-emerald-400 mr-2 mt-0.5 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
    <div className="pt-4 border-t border-gray-700/50">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-400">Success Metric</span>
        <MetricChip value={successMetric.value} label={successMetric.label} />
      </div>
    </div>
  </div>
)

// ============================================
// COMPONENT: Download Tile
// ============================================
const DownloadTile = ({ icon: Icon, title, description, filename }) => (
  <div className="bg-gray-800/50 backdrop-blur rounded-xl p-5 border border-gray-700/50 hover-card cursor-pointer group">
    <div className="flex items-start gap-4">
      <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
        <Icon size={24} className="text-blue-400" />
      </div>
      <div className="flex-1">
        <h4 className="font-medium text-white group-hover:text-blue-400 transition-colors">{title}</h4>
        <p className="text-sm text-gray-400 mt-1">{description}</p>
      </div>
      <Download size={20} className="text-gray-500 group-hover:text-blue-400 transition-colors" />
    </div>
  </div>
)

// ============================================
// MAIN PORTFOLIO COMPONENT
// ============================================
export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = ['Home', 'Services', 'Projects', 'About', 'Resources', 'Contact']

  // Sample data - replace with your real content
  const proofPoints = [
    { value: '-18%', label: 'media waste' },
    { value: '+32%', label: 'conversion lift' },
    { value: '8', label: 'markets managed' },
    { value: '$12M', label: 'budget optimized' },
  ]

  const services = [
    {
      title: 'Digital Transformation Strategy',
      timeline: '4-6 weeks',
      description: 'End-to-end digital transformation roadmap aligned with business objectives, covering technology, process, and people dimensions.',
      deliverables: [
        'Current state assessment & gap analysis',
        'Technology stack recommendations',
        'Implementation roadmap with milestones',
        'Change management framework'
      ],
      successMetric: { value: '+40%', label: 'efficiency gains' }
    },
    {
      title: 'Data Strategy & Analytics',
      timeline: '3-4 weeks',
      description: 'Build a data-driven culture with actionable insights, proper governance, and scalable analytics infrastructure.',
      deliverables: [
        'Data maturity assessment',
        'Analytics architecture design',
        'KPI framework & dashboards',
        'Data governance playbook'
      ],
      successMetric: { value: '85%', label: 'data accuracy' }
    },
    {
      title: 'MarTech Stack Optimization',
      timeline: '2-4 weeks',
      description: 'Audit, streamline, and optimize your marketing technology stack for maximum ROI and operational efficiency.',
      deliverables: [
        'Tech stack audit & rationalization',
        'Integration architecture',
        'Vendor evaluation matrix',
        'Migration/implementation plan'
      ],
      successMetric: { value: '-30%', label: 'tool redundancy' }
    },
    {
      title: 'AI Implementation Advisory',
      timeline: '4-8 weeks',
      description: 'Strategic guidance on AI/ML adoption, from use case identification to pilot implementation and scaling.',
      deliverables: [
        'AI opportunity assessment',
        'Use case prioritization matrix',
        'Pilot program design',
        'ROI projection model'
      ],
      successMetric: { value: '3x', label: 'productivity boost' }
    }
  ]

  const projects = [
    {
      title: 'APAC E-commerce Transformation',
      timeline: '2023',
      metrics: [
        { value: '+45%', label: 'revenue growth' },
        { value: '-22%', label: 'CAC reduction' },
        { value: '6', label: 'markets launched' }
      ],
      description: 'Led end-to-end digital transformation for a Fortune 500 CPG brand across 6 APAC markets, unifying fragmented e-commerce operations into a scalable platform.',
      tags: ['E-commerce', 'APAC', 'Digital Transformation', 'Shopify']
    },
    {
      title: 'Data-Driven Media Optimization',
      timeline: '2022-2023',
      metrics: [
        { value: '-18%', label: 'media waste' },
        { value: '+32%', label: 'ROAS improvement' },
        { value: '$8M', label: 'savings identified' }
      ],
      description: 'Implemented cross-channel attribution and automated budget allocation system, reducing media waste while improving performance metrics.',
      tags: ['Analytics', 'Media', 'Attribution', 'Automation']
    },
    {
      title: 'AI-Powered Customer Intelligence',
      timeline: '2023',
      metrics: [
        { value: '+28%', label: 'LTV increase' },
        { value: '89%', label: 'prediction accuracy' },
        { value: '2.5x', label: 'engagement lift' }
      ],
      description: 'Built predictive customer segmentation system using ML, enabling personalized experiences at scale across digital touchpoints.',
      tags: ['AI/ML', 'Personalization', 'CDP', 'Python']
    }
  ]

  const resources = [
    { icon: Briefcase, title: 'Executive Summary', description: '2-page overview of key achievements', filename: 'executive-summary.pdf' },
    { icon: BarChart3, title: 'Case Study Portfolio', description: 'Detailed project breakdowns', filename: 'case-studies.pdf' },
    { icon: Target, title: 'Skills Matrix', description: 'Technical & leadership competencies', filename: 'skills-matrix.pdf' },
    { icon: Award, title: 'Certifications', description: 'Professional credentials', filename: 'certifications.pdf' },
    { icon: Users, title: 'References', description: 'Testimonials & contact info', filename: 'references.pdf' },
    { icon: Globe, title: 'Market Experience', description: 'APAC regional expertise', filename: 'market-experience.pdf' },
  ]

  const skills = {
    expert: ['Digital Strategy', 'Data Analytics', 'MarTech', 'E-commerce', 'Stakeholder Management'],
    advanced: ['AI/ML Implementation', 'Agile/Scrum', 'Cloud Architecture', 'Team Leadership', 'Budget Management']
  }

  return (
    <div className="min-h-screen bg-gray-950">
      {/* ============================================ */}
      {/* NAVIGATION */}
      {/* ============================================ */}
      <nav className="fixed top-0 w-full bg-gray-950/90 backdrop-blur-lg border-b border-gray-800/50 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#home" className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
              Your Name
            </a>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                >
                  {item}
                </a>
              ))}
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Let's Talk
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Nav */}
          {mobileMenuOpen && (
            <div className="md:hidden pt-4 pb-2 border-t border-gray-800 mt-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-gray-300 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-blue-400 font-mono text-sm mb-4 tracking-wide">DIGITAL TRANSFORMATION LEADER</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              I help enterprises <span className="gradient-text">unlock growth</span> through data-driven digital transformation
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              15+ years driving digital initiatives across APAC. From strategy to execution, 
              I build the systems that turn data into decisions and technology into competitive advantage.
            </p>
            
            {/* Proof Points */}
            <div className="flex flex-wrap gap-3 mb-10">
              {proofPoints.map((point, idx) => (
                <MetricChip key={idx} value={point.value} label={point.label} />
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-medium flex items-center gap-2 transition-all hover:gap-3"
              >
                <Calendar size={20} />
                Book 15-min Intro
              </a>
              <a 
                href="#resources" 
                className="border border-gray-600 hover:border-gray-500 text-white px-8 py-4 rounded-lg font-medium flex items-center gap-2 transition-colors"
              >
                <Download size={20} />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SERVICES SECTION */}
      {/* ============================================ */}
      <section id="services" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-blue-400 font-mono text-sm mb-2 tracking-wide">WHAT I DO</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Services</h2>
            <p className="text-gray-400 max-w-2xl">
              Productized consulting engagements with clear deliverables, timelines, and success metrics.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* PROJECTS SECTION */}
      {/* ============================================ */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-blue-400 font-mono text-sm mb-2 tracking-wide">PROOF OF WORK</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Signature Projects</h2>
            <p className="text-gray-400 max-w-2xl">
              Selected case studies demonstrating measurable business impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <CaseCard key={idx} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* ABOUT SECTION */}
      {/* ============================================ */}
      <section id="about" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-blue-400 font-mono text-sm mb-2 tracking-wide">BACKGROUND</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a digital transformation leader with 15+ years of experience driving strategic initiatives 
                across APAC markets. My approach combines deep technical understanding with business acumen, 
                enabling me to bridge the gap between vision and execution.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                Currently, I'm building StudyHub, an AI-powered learning platform, while advising enterprises 
                on their digital transformation journey. I believe in data-driven decision making, continuous 
                learning, and building systems that scale.
              </p>
              
              {/* Scope Metrics */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                  <div className="text-2xl font-bold text-white">8+</div>
                  <div className="text-sm text-gray-400">APAC Markets</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                  <div className="text-2xl font-bold text-white">$50M+</div>
                  <div className="text-sm text-gray-400">Budget Managed</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                  <div className="text-2xl font-bold text-white">30+</div>
                  <div className="text-sm text-gray-400">Team Size</div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Skills Matrix</h3>
              
              <div className="mb-6">
                <h4 className="text-sm font-medium text-emerald-400 mb-3 uppercase tracking-wide">Expert</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.expert.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-emerald-500/20 text-emerald-400 text-sm rounded-lg border border-emerald-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-blue-400 mb-3 uppercase tracking-wide">Advanced</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.advanced.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-blue-500/20 text-blue-400 text-sm rounded-lg border border-blue-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* RESOURCES SECTION */}
      {/* ============================================ */}
      <section id="resources" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-blue-400 font-mono text-sm mb-2 tracking-wide">FOR RECRUITERS & PARTNERS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Resources</h2>
            <p className="text-gray-400 max-w-2xl">
              Everything you need to evaluate fit. Download materials or schedule a conversation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.map((resource, idx) => (
              <DownloadTile key={idx} {...resource} />
            ))}
          </div>
        </div>
      </section>

{/* ============================================ */}
      {/* CONTACT SECTION */}
      {/* ============================================ */}
      <section id="contact" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-blue-400 font-mono text-sm mb-2 tracking-wide">GET IN TOUCH</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Connect</h2>
            <p className="text-gray-400 max-w-2xl">
              Available for consulting engagements, advisory roles, and strategic partnerships.
              APAC timezone friendly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <a href="mailto:hello@example.com" className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover-card group">
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <Mail size={24} className="text-blue-400" />
              </div>
              <div className="flex-1">
                <div className="text-white font-medium group-hover:text-blue-400 transition-colors">Email</div>
                <div className="text-gray-400 text-sm">hello@example.com</div>
              </div>
              <ArrowRight size={20} className="text-gray-600 group-hover:text-blue-400 transition-colors" />
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover-card group">
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <Linkedin size={24} className="text-blue-400" />
              </div>
              <div className="flex-1">
                <div className="text-white font-medium group-hover:text-blue-400 transition-colors">LinkedIn</div>
                <div className="text-gray-400 text-sm">Connect with me</div>
              </div>
              <ArrowRight size={20} className="text-gray-600 group-hover:text-blue-400 transition-colors" />
            </a>

            <a href="tel:+6512345678" className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover-card group">
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <Phone size={24} className="text-blue-400" />
              </div>
              <div className="flex-1">
                <div className="text-white font-medium group-hover:text-blue-400 transition-colors">Phone</div>
                <div className="text-gray-400 text-sm">+65 1234 5678</div>
              </div>
              <ArrowRight size={20} className="text-gray-600 group-hover:text-blue-400 transition-colors" />
            </a>

            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover-card group">
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <Calendar size={24} className="text-blue-400" />
              </div>
              <div className="flex-1">
                <div className="text-white font-medium group-hover:text-blue-400 transition-colors">Book a Call</div>
                <div className="text-gray-400 text-sm">Schedule a 15-min intro</div>
              </div>
              <ArrowRight size={20} className="text-gray-600 group-hover:text-blue-400 transition-colors" />
            </a>

            <a href="YOUR_HUBSPOT_FORM_URL" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover-card group">
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <ExternalLink size={24} className="text-blue-400" />
              </div>
              <div className="flex-1">
                <div className="text-white font-medium group-hover:text-blue-400 transition-colors">Send a Message</div>
                <div className="text-gray-400 text-sm">Send a Message</div>
              </div>
              <ArrowRight size={20} className="text-gray-600 group-hover:text-blue-400 transition-colors" />
            </a>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FOOTER */}
      {/* ============================================ */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 Your Name. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

