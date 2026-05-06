import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import FeatureCard from '@/components/FeatureCard';
import CTABanner from '@/components/CTABanner';
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
  {
    step: '01',
    title: 'Create Content',
    description:
      'Design beautiful screen layouts with our drag-and-drop editor. Add tables, carousels, tickers, images, and videos.',
  },
  {
    step: '02',
    title: 'Assign to Screens',
    description:
      'Map your content to specific screens across locations using tags, groups, or direct assignment.',
  },
  {
    step: '03',
    title: 'Publish Instantly',
    description:
      'Push updates to all your displays with one click. Changes go live in seconds.',
  },
  {
    step: '04',
    title: 'Monitor Devices',
    description:
      'Track device health, connectivity, and screen status from a unified dashboard.',
  },
];

const features = [
  { icon: '🎨', title: 'Content Builder', description: 'Drag-and-drop editor for creating professional screen layouts with multiple content zones.' },
  { icon: '🖥️', title: 'Screen Management', description: 'Organize and manage screens across multiple locations from one dashboard.' },
  { icon: '📱', title: 'Device Management', description: 'Pair, monitor, and control Fire TV, Android TV, and browser-based displays.' },
  { icon: '📅', title: 'Scheduling', description: 'Schedule content by time, date, and location. Set broadcast windows and off-air hours.' },
  { icon: '📋', title: 'Templates', description: 'Start with pre-built layouts for menus, announcements, promotions, and more.' },
  { icon: '📜', title: 'Ticker / Scrolling Text', description: 'Add scrolling news tickers, announcements, and promotional messages.' },
  { icon: '🖼️', title: 'Image & Video', description: 'Upload and display images and videos. Supports YouTube, Vimeo, and direct files.' },
  { icon: '📍', title: 'Multi-location', description: 'Manage screens across multiple locations with location-based content rules.' },
  { icon: '📊', title: 'Analytics', description: 'Track device health, screen uptime, and content performance from your dashboard.' },
  { icon: '💬', title: 'Feedback Collection', description: 'Collect customer feedback and interest forms directly on your displays.' },
];

const hardwareItems = [
  { icon: '📺', name: 'Android TV', desc: 'Native app for Android TV devices' },
  { icon: '🔥', name: 'Fire TV Stick', desc: 'Plug-and-play Fire TV support' },
  { icon: '🌐', name: 'Smart TV Browser', desc: 'Browser-based player for any smart TV' },
  { icon: '🏢', name: 'Commercial Display', desc: 'Professional signage displays' },
  { icon: '💻', name: 'Mini PC / Android Box', desc: 'Compact dedicated players' },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-bg-soft to-white py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <RevealOnScroll>
            <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full mb-6">
              Now in Early Access
            </span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-bold text-text mb-6 leading-tight">
              Modern Digital Signage<br />Made Simple
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-8">
              Create, manage, and publish beautiful content to any screen. From a single display to hundreds across locations.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                href="/demo"
                className="px-8 py-3.5 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors"
              >
                Request a Demo
              </Link>
              <Link
                href="/features"
                className="px-8 py-3.5 border-2 border-border text-text font-semibold rounded-full hover:border-primary hover:text-primary transition-colors"
              >
                Explore Features
              </Link>
            </div>
          </RevealOnScroll>
          <DashboardMockup />
        </div>
      </section>

      {/* Use Cases Strip */}
      <section className="py-16 px-6 bg-bg-soft border-y border-border">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <p className="text-center text-sm text-text-light font-medium uppercase tracking-widest mb-8">Trusted across industries</p>
            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-4">
              {useCases.map((uc) => (
                <div key={uc.label} className="flex flex-col items-center gap-3 px-3 py-5 bg-white rounded-2xl border border-border shadow-sm hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all cursor-default">
                  <span className="text-5xl">{uc.icon}</span>
                  <span className="text-xs font-semibold text-text text-center leading-tight">{uc.label}</span>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="How It Works"
            title="Up and Running in Minutes"
            subtitle="Four simple steps to transform your screens into dynamic digital displays."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, i) => (
              <RevealOnScroll key={step.step} delay={i * 0.1}>
                <div className="bg-bg-soft rounded-2xl p-6 border border-border h-full">
                  <div className="text-3xl font-bold text-primary/20 mb-3">{step.step}</div>
                  <h3 className="text-lg font-semibold text-text mb-2">{step.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Screen Carousel */}
      <section className="py-20 px-6 bg-bg-soft">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="See It in Action"
            title="Screens That Work for You"
            subtitle="From restaurant menus to corporate dashboards, see what Displira can do."
          />
          <ScreenCarousel />
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Features"
            title="Everything You Need"
            subtitle="A complete digital signage platform with tools for content, devices, scheduling, and analytics."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {features.map((f, i) => (
              <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.description} delay={i * 0.05} />
            ))}
          </div>
        </div>
      </section>

      {/* Hardware */}
      <section className="py-20 px-6 bg-bg-soft">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Hardware"
            title="Works With Your Devices"
            subtitle="No proprietary hardware required. Use what you already have."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {hardwareItems.map((hw, i) => (
              <RevealOnScroll key={hw.name} delay={i * 0.08}>
                <div className="bg-white border border-border rounded-2xl p-5 text-center hover:shadow-md transition-shadow h-full">
                  <div className="text-3xl mb-3">{hw.icon}</div>
                  <h3 className="text-sm font-semibold text-text mb-1">{hw.name}</h3>
                  <p className="text-xs text-text-secondary">{hw.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
