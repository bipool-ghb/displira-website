import Link from 'next/link';
import Image from 'next/image';
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

const roiCards = [
  { icon: '💰', title: 'Lower Hardware Cost', description: 'Use Fire TV Sticks, Android TVs, or any smart display instead of expensive proprietary media players. Save hundreds per screen.' },
  { icon: '⚡', title: 'Faster Updates', description: 'Publish content changes in seconds, not hours. No more USB drives, manual uploads, or waiting for on-site staff.' },
  { icon: '🏢', title: 'Centralized Operations', description: 'Manage all screens, locations, and devices from a single cloud dashboard. Reduce travel, calls, and coordination overhead.' },
  { icon: '🛡️', title: 'Less Downtime', description: 'Device health monitoring and alerts help you catch issues before they affect your screens. Keep displays running reliably.' },
];

const traditionalItems = [
  'Expensive hardware',
  'Manual updates',
  'Hard to manage multiple locations',
  'Limited visibility into device status',
  'Slow content changes',
];

const displiraItems = [
  'Works with affordable devices',
  'Real-time publishing',
  'Multi-location cloud dashboard',
  'Device health monitoring',
  'Fast scheduling and campaign updates',
];

const onboardingSteps = [
  { step: 1, title: 'Pair Device', caption: 'Enter a code or scan a QR to connect your device', type: 'image' as const },
  { step: 2, title: 'Device Connected', caption: 'Instant confirmation when the device is ready', type: 'paired' as const },
  { step: 3, title: 'Assign Screen', caption: 'Assign content or layouts from the admin portal', type: 'assign' as const },
  { step: 4, title: 'Content Live', caption: 'Content appears instantly on the display', type: 'live' as const },
];

const useCasePreviewCards = [
  { icon: '🍽️', title: 'Restaurants', items: ['Menu boards', 'Daily specials', 'Combo offers', 'Kitchen notices'] },
  { icon: '🛍️', title: 'Retail', items: ['Promotions', 'Campaigns', 'Seasonal offers', 'Product highlights'] },
  { icon: '🏢', title: 'Corporate Offices', items: ['Announcements', 'Dashboards', 'Visitor messages', 'Internal communication'] },
  { icon: '🛒', title: 'Grocery & Supermarkets', items: ['Price boards', 'Fresh deals', 'Department screens', 'Rotating promotions'] },
];

const builtForScaleCards = [
  { icon: '🏗️', title: 'Multi-Tenant Foundation', description: 'Each organization operates in its own isolated space with separate users, devices, screens, and content.' },
  { icon: '🔐', title: 'Role-Based Access', description: 'Owner, Admin, Editor, and Viewer roles let you control who can create, edit, publish, and manage across the platform.' },
  { icon: '📱', title: 'Device Control Plane', description: 'Pair, monitor, reboot, and manage devices remotely. Track connectivity, app version, and screen assignment from one place.' },
  { icon: '🚀', title: 'Real-Time Publishing Engine', description: 'Push content updates instantly to screens across locations. No waiting, no syncing, no delays.' },
  { icon: '📊', title: 'Monitoring & Visibility', description: 'View device health, screen status, and publishing activity in real time from a centralized dashboard.' },
  { icon: '🌐', title: 'Deployment Ready', description: 'Cloud-hosted, API-accessible, and designed for fast rollout across multiple sites with minimal setup.' },
];

const reliableByDesignCards = [
  { icon: '💓', title: 'Device Health Monitoring', description: 'Track device connectivity, status, and health in real time. Know which screens are online, offline, or need attention.' },
  { icon: '📴', title: 'Offline-Friendly Player Experience', description: 'Players cache content locally so screens keep running even if the network drops temporarily.' },
  { icon: '📊', title: 'Centralized Status Dashboard', description: 'See all your devices, screens, and locations in one view. Filter by status, location, or device type.' },
  { icon: '📜', title: 'Publishing History', description: 'Track what was published, when, and by whom. Maintain a clear audit trail for every content update.' },
  { icon: '🔔', title: 'Faster Issue Detection', description: 'Get visibility into device issues quickly so your team can respond before screens go dark.' },
  { icon: '🔄', title: 'Clear Device Lifecycle', description: 'From pairing to decommission, manage the full lifecycle of every device in your network.' },
];

const CheckIcon = () => (
  <svg className="w-4 h-4 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const GreenCheck = () => (
  <svg className="w-5 h-5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const RedX = () => (
  <svg className="w-5 h-5 text-red-500 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
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
            <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 mb-10 text-sm text-text-secondary">
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
            <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12 flex-wrap">
              {['Multi-location ready', 'Hardware-flexible', 'Real-time publishing', 'Device monitoring', 'Role-based access'].map((t) => (
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

      {/* ROI Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="ROI"
            title="Why Displira Saves Time and Cost"
            subtitle="Reduce hardware spend, speed up updates, and simplify operations across every location."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {roiCards.map((item, i) => (
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

      {/* Traditional vs Displira */}
      <section className="py-24 px-6 bg-bg-soft">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            badge="Comparison"
            title="Traditional Signage vs. Displira"
            subtitle="See how Displira modernizes every aspect of digital signage management."
          />
          <RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Traditional */}
              <div className="bg-white border border-border rounded-2xl p-8">
                <h3 className="text-lg font-bold text-text mb-6">Traditional Signage</h3>
                <ul className="flex flex-col gap-4">
                  {traditionalItems.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-text-secondary">
                      <RedX /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Displira */}
              <div className="bg-white border border-primary/20 rounded-2xl p-8 shadow-lg">
                <h3 className="text-lg font-bold text-primary mb-6">Displira</h3>
                <ul className="flex flex-col gap-4">
                  {displiraItems.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-text-secondary">
                      <GreenCheck /> {item}
                    </li>
                  ))}
                </ul>
              </div>
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

      {/* Setup / Onboarding */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Onboarding"
            title="From Device to Live Screen in Minutes"
            subtitle="Pair devices, assign screens, and publish content in a simple guided flow."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {onboardingSteps.map((item, i) => (
              <RevealOnScroll key={item.step} delay={i * 0.12}>
                <div className="relative bg-bg-dark rounded-2xl overflow-hidden h-full border border-white/10 hover:border-primary/30 transition-all group">
                  {/* Step connector on desktop */}
                  {i < 3 && <div className="hidden lg:block absolute top-1/2 -right-2.5 w-5 border-t-2 border-dashed border-primary/30 z-10" aria-hidden="true" />}

                  {/* Step number */}
                  <div className="flex items-center justify-between px-5 pt-5 pb-3">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">Step 0{item.step}</span>
                    <span className="text-lg font-bold text-white/10">0{item.step}</span>
                  </div>

                  {/* Visual mock */}
                  <div className="px-4 pb-3">
                    {item.type === 'image' ? (
                      <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg">
                        <Image src="/pair-screen.png" alt="Displira device pairing screen showing code 865 949 and QR code" width={400} height={225} className="w-full h-auto" />
                      </div>
                    ) : item.type === 'paired' ? (
                      <div className="rounded-xl bg-[#0F1629] border border-white/10 p-5 flex flex-col items-center justify-center" style={{ minHeight: 140 }}>
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                          <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        </div>
                        <span className="text-sm font-bold text-white">Device Paired</span>
                        <span className="text-[10px] text-white/40 mt-1">Successfully connected</span>
                      </div>
                    ) : item.type === 'assign' ? (
                      <div className="rounded-xl bg-[#0F1629] border border-white/10 p-4" style={{ minHeight: 140 }}>
                        <div className="text-[9px] text-white/30 uppercase tracking-wider mb-2">Admin Portal</div>
                        <div className="flex items-center gap-2 bg-white/5 rounded-lg p-2.5 mb-2 border border-white/10">
                          <span className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center text-[10px]">🖥️</span>
                          <div>
                            <div className="text-[10px] font-semibold text-white">Main Entrance</div>
                            <div className="text-[8px] text-white/40">Menu Board Layout</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 bg-white/5 rounded-lg p-2.5 border border-white/10">
                          <span className="w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center text-[10px]">📱</span>
                          <div>
                            <div className="text-[10px] font-semibold text-white">Fire TV — Store #1</div>
                            <div className="text-[8px] text-primary">● Online</div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="rounded-xl overflow-hidden border border-white/10" style={{ minHeight: 140, background: 'linear-gradient(135deg, #1a0a00, #2d1810)' }}>
                        <div className="p-4">
                          <div className="text-[10px] font-bold text-amber-300/80 uppercase tracking-wider mb-2">Chef&apos;s Selection</div>
                          {[['Grilled Salmon', '$28'], ['Wagyu Ribeye', '$52'], ['Lobster Risotto', '$36']].map(([name, price]) => (
                            <div key={name} className="flex justify-between py-1 border-b border-white/5">
                              <span className="text-[9px] text-white/80">{name}</span>
                              <span className="text-[9px] text-amber-300/70 font-bold">{price}</span>
                            </div>
                          ))}
                          <div className="text-[7px] text-white/20 text-center mt-2">Powered by Displira</div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Title + Caption */}
                  <div className="px-5 pb-5 pt-2">
                    <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-xs text-white/50 leading-relaxed">{item.caption}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          {/* Micro-copy */}
          <RevealOnScroll delay={0.5}>
            <p className="text-center text-sm text-text-light mt-8">
              Works with Fire TV, Android TV, Smart TVs, and commercial displays — no proprietary hardware required.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Screen Carousel */}
      <section className="py-24 px-6 bg-bg-soft">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="See It in Action"
            title="Screens That Work for You"
            subtitle="From restaurant menus to corporate dashboards — see what your displays could look like."
          />
          <ScreenCarousel />
        </div>
      </section>

      {/* Use Case Preview */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Use Cases"
            title="Built for the Way Your Business Communicates"
            subtitle="Displira adapts to the unique needs of every industry and environment."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCasePreviewCards.map((card, i) => (
              <RevealOnScroll key={card.title} delay={i * 0.08}>
                <div className="group bg-white border border-border rounded-2xl p-7 hover:shadow-xl hover:border-primary/20 transition-all duration-300 h-full flex flex-col">
                  <span className="text-3xl block mb-4" role="img" aria-hidden="true">{card.icon}</span>
                  <h3 className="text-lg font-bold text-text mb-3">{card.title}</h3>
                  <ul className="flex flex-col gap-2 mb-6 flex-1">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-text-secondary">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/use-cases" className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors">
                    Explore use cases →
                  </Link>
                </div>
              </RevealOnScroll>
            ))}
          </div>
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
              <Link href="/demo" className="px-8 py-3.5 text-primary font-semibold rounded-full hover:bg-primary/5 transition-colors" aria-label="Start free pilot">
                Start Free Pilot
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

      {/* Built for Scale */}
      <section className="py-24 px-6 bg-bg-soft">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Scale"
            title="Built for Growing Teams and Multi-Location Operations"
            subtitle="Displira is designed from the ground up to support multi-tenant organizations, distributed teams, and large-scale deployments."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {builtForScaleCards.map((item, i) => (
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

      {/* Hardware */}
      <section className="py-24 px-6 bg-white">
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

      {/* Reliable by Design */}
      <section className="py-24 px-6 bg-bg-soft">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Reliability"
            title="Reliable by Design"
            subtitle="Displira helps teams keep screens running, updated, and visible from one place."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reliableByDesignCards.map((item, i) => (
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Launch Digital Signage That Scales With Your Business</h2>
              <p className="text-lg text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
                Start with one screen, expand across locations, and manage everything from a cloud platform built for flexible hardware and real-time publishing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
                <Link href="/demo" className="px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-white/90 transition-all shadow-lg hover:-translate-y-0.5" aria-label="Request a demo">
                  Request a Demo
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all hover:-translate-y-0.5" aria-label="See a live demo">
                  See Live Demo
                </Link>
              </div>
              <Link href="/demo" className="text-sm text-white/70 hover:text-white transition-colors underline underline-offset-4">
                Or start a free pilot →
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
