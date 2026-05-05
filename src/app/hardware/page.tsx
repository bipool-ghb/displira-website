import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import FeatureCard from '@/components/FeatureCard';
import CTABanner from '@/components/CTABanner';
import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata: Metadata = {
  title: 'Hardware & Services — Displira',
  description: 'Explore Displira supported hardware and professional services for digital signage.',
};

const services = [
  { icon: '☁️', title: 'Software CMS', description: 'Cloud-based content management system with drag-and-drop editor' },
  { icon: '📱', title: 'Player App', description: 'Native Android/Fire TV app with offline support and auto-updates' },
  { icon: '⚙️', title: 'Device Setup', description: 'Remote device configuration and provisioning assistance' },
  { icon: '🖥️', title: 'Display Recommendation', description: 'Expert guidance on choosing the right displays for your space' },
  { icon: '🔧', title: 'Installation Support', description: 'On-site or remote installation guidance for your signage setup' },
  { icon: '🎨', title: 'Content Setup', description: 'Professional content design and initial setup assistance' },
  { icon: '🛡️', title: 'Monthly Support', description: 'Ongoing technical support and platform maintenance' },
];

interface HardwareItem {
  icon: string;
  name: string;
  description: string;
  specs: string[];
}

const hardwareItems: HardwareItem[] = [
  {
    icon: '🔥',
    name: 'Fire TV Stick',
    description: 'Affordable plug-and-play signage',
    specs: ['1080p output', 'Wi-Fi', 'Compact form factor'],
  },
  {
    icon: '📺',
    name: 'Android TV Box',
    description: 'Dedicated Android player',
    specs: ['4K support', 'Ethernet + Wi-Fi', 'Auto-boot on power'],
  },
  {
    icon: '🏭',
    name: 'Android Signage Player',
    description: 'Commercial-grade player',
    specs: ['Industrial design', 'PoE optional', 'Kiosk mode'],
  },
  {
    icon: '🖥️',
    name: 'Commercial Signage TV',
    description: 'Professional displays',
    specs: ['43"-75" options', 'Built-in player', 'Portrait/landscape'],
  },
  {
    icon: '💻',
    name: 'Mini PC',
    description: 'Compact Windows or Linux',
    specs: ['x86 architecture', 'Multiple outputs', 'Full OS access'],
  },
];

export default function HardwarePage() {
  return (
    <>
      <section className="py-20 px-6 bg-gradient-to-b from-bg-soft to-white">
        <div className="max-w-7xl mx-auto text-center">
          <SectionHeader
            badge="Hardware & Services"
            title="Complete Signage Solutions"
            subtitle="From software to hardware to installation, we have everything you need."
          />
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="Services" title="Professional Services" subtitle="End-to-end support to get your signage up and running." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <FeatureCard key={s.title} icon={s.icon} title={s.title} description={s.description} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* Hardware */}
      <section className="py-20 px-6 bg-bg-soft">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="Hardware" title="Supported Hardware" subtitle="Works with affordable, off-the-shelf devices. No vendor lock-in." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {hardwareItems.map((hw, i) => (
              <RevealOnScroll key={hw.name} delay={i * 0.08}>
                <div className="bg-white border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/30 transition-all h-full">
                  <div className="text-3xl mb-3">{hw.icon}</div>
                  <h3 className="text-base font-semibold text-text mb-1">{hw.name}</h3>
                  <p className="text-sm text-text-secondary mb-4">{hw.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {hw.specs.map((spec) => (
                      <span key={spec} className="px-2.5 py-1 text-xs bg-bg-soft text-text-secondary rounded-full border border-border">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
