import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import FeatureCard from '@/components/FeatureCard';
import DashboardMockup from '@/components/DashboardMockup';
import ScreenCarousel from '@/components/ScreenCarousel';
import RevealOnScroll from '@/components/RevealOnScroll';

const useCases = [
  { icon: '🍽️', label: 'Restaurants' },
  { icon: '🛍️', label: 'Retail Stores' },
  { icon: '🛒', label: 'Grocery & Supermarkets' },
  { icon: '🏢', label: 'Corporate Offices' },
  { icon: '🎓', label: 'Schools & Universities' },
  { icon: '🏥', label: 'Clinics & Hospitals' },
  { icon: '🏛️', label: 'Community Centers' },
  { icon: '🎪', label: 'Events & Conferences' },
  { icon: '🏨', label: 'Hotels & Hospitality' },
];

const howItWorks = [
  { step: '01', title: 'Create Content', description: 'Design beautiful screen layouts with our drag-and-drop editor. Add tables, carousels, tickers, images, and videos.', icon: '🎨' },
  { step: '02', title: 'Assign to Screens', description: 'Map your content to specific screens across locations using tags, groups, or direct assignment.', icon: '🖥️' },
  { step: '03', title: 'Publish Instantly', description: 'Push updates to all your displays with one click. Changes go live in seconds.', icon: '⚡' },
  { step: '04', title: 'Monitor Devices', description: 'Track device health, connectivity, and screen status from a unified dashboard.', icon: '📊' },
];

const whyDisplira = [
  { icon: '🌐', title: 'Built for Multi-Location Scale', description: 'Manage screens across dozens of locations from a single dashboard. Tag, group, and target content by site.' },
  { icon: '⚡', title: 'Publish in Real Time', description: 'Content changes go live in seconds. No waiting, no manual syncing, no delays.' },
  { icon: '💰', title: 'Lower Hardware Cost', description: 'Use affordable Fire TV Sticks, Android TVs, or any smart TV. No expensive proprietary players.' },
  { icon: '🔍', title: 'Device Health Monitoring', description: 'Know which screens are online, offline, or need attention — before your customers notice.' },
  { icon: '👥', title: 'Simple for Non-Technical Teams', description: 'Anyone can create and publish content. No design skills or IT team required.' },
  { icon: '🏗️', title: 'Enterprise-Ready Foundation', description: 'Multi-tenant accounts, role-based access, SSO-ready, audit logs, and API access.' },
];

const features = [
  { icon: '🎨', title: 'Content Builder', description: 'Drag-and-drop editor with tables, carousels, tickers, images, videos, and custom HTML zones.' },
  { icon: '🖥️', title: 'Screen Management', description: 'Organize screens across locations. Assign layouts, themes, and content zones per screen.' },
  { icon: '📱', title: 'Device Management', description: 'Pair, monitor, and control Fire TV, Android TV, and browser-based displays remotely.' },
  { icon: '📅', title: 'Scheduling', description: 'Schedule content by time, date, and location. Set broadcast windows and off-air hours.' },
  { icon: '📋', title: 'Templates', description: 'Pre-built layouts for menus, announcements, promotions, event schedules, and more.' },
  { icon: '🚀', title: 'Real-Time Publishing', description: 'Push updates to all displays instantly. One-click publish with live preview.' },
  { icon: '📊', title: 'Analytics & Monitoring', description: 'Track device health, uptime, screen status, and content performance in real time.' },
  { icon: '🔐', title: 'Roles & Permissions', description: 'Owner, Admin, Editor, Viewer roles. Control who can create, edit, publish, and manage.' },
];

const services = [
  { icon: '💻', title: 'Software Platform', description: 'Cloud-based CMS with drag-and-drop content editor, device management, and analytics.' },
  { icon: '📺', title: 'Hardware Recommendation', description: 'Expert guidance on choosing the right displays and players for your space and budget.' },
  { icon: '🔗', title: 'Screen Setup & Pairing', description: 'Remote or on-site assistance to pair devices, configure screens, and go live.' },
  { icon: '📁', title: 'Content Migration', description: 'We help you move existing content, menus, and media into Displira smoothly.' },
  { icon: '📋', title: 'Deployment Planning', description: 'Site surveys, hardware specs, network requirements, and rollout timelines.' },
  { icon: '🛡️', title: 'Ongoing Support', description: 'Technical support, platform updates, and proactive device health monitoring.' },
];

const hardwareItems = [
  { icon: '📺', name: 'Android TV', desc: 'Native app for Android TV devices', specs: ['4K support', 'Wi-Fi + Ethernet', 'Auto-boot'] },
  { icon: '🔥', name: 'Fire TV Stick', desc: 'Affordable plug-and-play signage', specs: ['1080p output', 'Wi-Fi', 'Compact'] },
  { icon: '🌐', name: 'Smart TV Browser', desc: 'Browser-based player for any smart TV', specs: ['No app install', 'Universal', 'Instant setup'] },
  { icon: '🏢', name: 'Commercial Display', desc: 'Professional signage displays', specs: ['43"–75"', 'Built-in player', 'Portrait/landscape'] },
  { icon: '💻', name: 'Mini PC / Android Box', desc: 'Compact dedicated players', specs: ['Multiple outputs', 'Full OS', 'Kiosk mode'] },
];

const CheckIcon = () => (
  <svg className="w-4 h-4 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32 px-6" style={{ background: 'linear-gradient(180deg, #F0FDF9 0%, #F8F9FC 40%, #FFFFFF 100%)' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-20 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, #34D399 0%, transparent 70%)' }} aria-hidden="true" />

        <div className="max-w-7xl mx-auto text-center relative">
          <RevealOnScroll>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full mb-6 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
              Now in Early Access
            </span>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6 leading-[1.1] tracking-tight">
              Control Every Screen<br className="hidden sm:block" />From One Platform
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
              Create, schedule, publish, and monitor digital signage across restaurants, retail, offices, schools, clinics, and multi-location businesses — without expensive proprietary hardware.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.25}>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-10 text-sm text-text-secondary">
              <span className="flex items-center gap-2 justify-center"><span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" /> Multi-location screen management</span>
              <span className="flex items-center gap-2 justify-center"><span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" /> Real-time publishing &amp; scheduling</span>
              <span className="flex items-center gap-2 justify-center"><span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" /> Works with Fire TV, Android TV, Smart TVs</span>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
              <Link href="/demo" className="px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5" aria-label="Request a demo of Displira">
                Request a Demo
              </Link>
              <Link href="/contact" className="px-8 py-4 border-2 border-border text-text font-semibold rounded-full hover:border-primary hover:text-primary transition-all hover:-translate-y-0.5" aria-label="See a live demo of Displira">
                See Live Demo
              </Link>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.35}>
            <div className="relative">
              <div className="absolute inset-0 -m-8 rounded-3xl opacity-30 blur-2xl pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, #0D8A6A33 0%, transparent 70%)' }} aria-hidden="true" />
              <DashboardMockup />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-8 px-6 bg-bg-dark" aria-label="Trust signals">
        <div className="max-w-5xl mx-auto">
          <RevealOnScroll>
            <p className="text-center text-white/60 text-sm mb-5">Built for growing businesses, multi-location teams, and enterprise-ready deployments.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12">
              {['Multi-location ready', 'Hardware-flexible', 'Real-time publishing'].map((t) => (
                <span key={t} className="flex items-center gap-2 text-white/80 text-sm font-medium justify-center">
                  <CheckIcon /> {t}
                </span>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Use Cases Strip */}
      <section className="py-16 px-6 bg-bg-soft border-b border-border" aria-label="Industries served">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <p className="text-center text-sm text-text-light font-medium uppercase tracking-widest mb-8">Trusted across industries</p>
            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-4">
              {useCases.map((uc) => (
                <div key={uc.label} className="flex flex-col items-center gap-3 px-3 py-5 bg-white rounded-2xl border border-border shadow-sm hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all cursor-default">
                  <span className="text-5xl" role="img" aria-label={uc.label}>{uc.icon}</span>
                  <span className="text-xs font-semibold text-text text-center leading-tight">{uc.label}</span>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Why Displira */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Why Displira"
            title="Why Businesses Choose Displira"
            subtitle="Purpose-built for teams that need reliable, scalable digital signage without the complexity."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyDisplira.map((item, i) => (
              <RevealOnScroll key={item.title} delay={i * 0.08}>
                <div className="group bg-white border border-border rounded-2xl p-7 hover:shadow-xl hover:border-primary/20 transition-all duration-300 h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl pointer-events-none" style={{ background: '#0D8A6A15' }} aria-hidden="true" />
                  <span className="text-3xl block mb-4" role="img" aria-hidden="true">{item.icon}</span>
                  <h3 className="text-lg font-bold text-text mb-2">{item.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-bg-soft">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="How It Works"
            title="Up and Running in Minutes"
            subtitle="Four simple steps to transform your screens into dynamic digital displays."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, i) => (
              <RevealOnScroll key={step.step} delay={i * 0.1}>
                <div className="relative bg-white rounded-2xl p-7 border border-border hover:shadow-lg hover:border-primary/20 transition-all h-full">
                  {i < 3 && <div className="hidden lg:block absolute top-12 -right-3 w-6 border-t-2 border-dashed border-primary/20" aria-hidden="true" />}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-xl" role="img" aria-hidden="true">{step.icon}</span>
                    <span className="text-2xl font-bold text-primary/20">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-text mb-2">{step.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Screen Carousel */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="See It in Action"
            title="Screens That Work for You"
            subtitle="From restaurant menus to corporate dashboards — see what your displays could look like."
          />
          <ScreenCarousel />
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="py-16 px-6" style={{ background: 'linear-gradient(135deg, #F0FDF9 0%, #ECFDF5 100%)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <RevealOnScroll>
            <h2 className="text-2xl md:text-3xl font-bold text-text mb-4">Ready to see Displira in action?</h2>
            <p className="text-text-secondary mb-8 max-w-xl mx-auto">Get a personalized walkthrough of the platform, or explore our pricing to find the right plan.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo" className="px-8 py-3.5 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all shadow-lg shadow-primary/20" aria-label="Request a demo">
                Request a Demo
              </Link>
              <Link href="/pricing" className="px-8 py-3.5 border-2 border-border text-text font-semibold rounded-full hover:border-primary hover:text-primary transition-colors" aria-label="View pricing">
                View Pricing
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Features"
            title="Everything You Need to Run Professional Signage"
            subtitle="A complete platform for content creation, device management, scheduling, publishing, and analytics."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.description} delay={i * 0.05} />
            ))}
          </div>
        </div>
      </section>

      {/* Hardware */}
      <section className="py-24 px-6 bg-bg-soft">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Hardware Flexible"
            title="Works With the Devices You Already Have"
            subtitle="No proprietary hardware required. Use affordable consumer devices or commercial displays — Displira runs on them all."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {hardwareItems.map((hw, i) => (
              <RevealOnScroll key={hw.name} delay={i * 0.08}>
                <div className="bg-white border border-border rounded-2xl p-6 text-center hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 transition-all h-full">
                  <div className="text-4xl mb-4" role="img" aria-label={hw.name}>{hw.icon}</div>
                  <h3 className="text-sm font-bold text-text mb-1">{hw.name}</h3>
                  <p className="text-xs text-text-secondary mb-3">{hw.desc}</p>
                  <div className="flex flex-wrap justify-center gap-1">
                    {hw.specs.map((s) => (
                      <span key={s} className="text-[10px] px-2 py-0.5 bg-bg-soft text-text-light rounded-full border border-border">{s}</span>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* End-to-End Services */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Full Service"
            title="Software, Hardware Guidance, and Deployment Support"
            subtitle="From your first screen to a full multi-location rollout — we're with you every step of the way."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <RevealOnScroll key={svc.title} delay={i * 0.08}>
                <div className="bg-bg-soft border border-border rounded-2xl p-7 hover:shadow-lg hover:border-primary/20 hover:bg-white transition-all h-full">
                  <span className="text-3xl block mb-4" role="img" aria-hidden="true">{svc.icon}</span>
                  <h3 className="text-lg font-bold text-text mb-2">{svc.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{svc.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <RevealOnScroll>
          <div className="max-w-5xl mx-auto rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #065F46 0%, #0D8A6A 50%, #10B981 100%)' }}>
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} aria-hidden="true" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Launch Professional Digital Signage for Your Business</h2>
              <p className="text-lg text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
                Flexible software, affordable hardware options, and a platform built to scale — from a single screen to hundreds across locations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/demo" className="px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-white/90 transition-all shadow-lg hover:-translate-y-0.5" aria-label="Request a demo">
                  Request a Demo
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all hover:-translate-y-0.5" aria-label="See a live demo">
                  See Live Demo
                </Link>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
