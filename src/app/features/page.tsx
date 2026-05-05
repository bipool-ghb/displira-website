import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import FeatureCard from '@/components/FeatureCard';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Features — Displira',
  description: 'Explore the full feature set of Displira digital signage platform.',
};

interface FeatureCategory {
  badge: string;
  title: string;
  subtitle: string;
  features: { icon: string; title: string; description: string }[];
  bg: string;
}

const categories: FeatureCategory[] = [
  {
    badge: 'Content Creation',
    title: 'Build Stunning Screen Content',
    subtitle: 'Professional content tools that anyone can use.',
    bg: 'bg-white',
    features: [
      { icon: '🎨', title: 'Drag-and-Drop Editor', description: 'Build screen layouts visually with multiple content zones, layers, and widgets.' },
      { icon: '📋', title: 'Template Library', description: 'Start from pre-built templates for menus, promotions, announcements, and dashboards.' },
      { icon: '📜', title: 'Ticker / Scrolling Text', description: 'Add scrolling news tickers, announcements, and promotional messages to any layout.' },
      { icon: '🖼️', title: 'Image & Video Support', description: 'Upload images and videos, or embed from YouTube and Vimeo directly into your content.' },
      { icon: '📊', title: 'Tables & Data', description: 'Display structured data with customizable tables, perfect for menus and price lists.' },
      { icon: '🎠', title: 'Carousels & Playlists', description: 'Create rotating content carousels and media playlists for dynamic screen displays.' },
    ],
  },
  {
    badge: 'Device & Screen Management',
    title: 'Manage Every Screen from One Place',
    subtitle: 'Complete control over all your displays and devices.',
    bg: 'bg-bg-soft',
    features: [
      { icon: '🖥️', title: 'Screen Dashboard', description: 'View and manage all screens across locations with real-time status and previews.' },
      { icon: '📱', title: 'Device Pairing', description: 'Pair Fire TV, Android TV, and browser-based displays with a simple code or QR scan.' },
      { icon: '🏷️', title: 'Tags & Groups', description: 'Organize devices with custom tags and groups for targeted content delivery.' },
      { icon: '📍', title: 'Location Management', description: 'Manage multiple locations and assign location-specific content rules.' },
    ],
  },
  {
    badge: 'Scheduling & Automation',
    title: 'Automate Your Content',
    subtitle: 'Set it and forget it with powerful scheduling tools.',
    bg: 'bg-white',
    features: [
      { icon: '📅', title: 'Time-Based Scheduling', description: 'Schedule content by time, date, and day of week. Set broadcast windows and off-air hours.' },
      { icon: '🔄', title: 'Location-Based Rules', description: 'Automatically display different content based on screen location and zone.' },
    ],
  },
  {
    badge: 'Analytics & Insights',
    title: 'Track What Matters',
    subtitle: 'Monitor your entire signage network in real time.',
    bg: 'bg-bg-soft',
    features: [
      { icon: '📈', title: 'Device Health', description: 'Monitor device connectivity, uptime, and performance metrics from your dashboard.' },
      { icon: '📊', title: 'Content Analytics', description: 'Track content playback, screen usage, and engagement across all locations.' },
    ],
  },
  {
    badge: 'Administration',
    title: 'Enterprise-Ready Management',
    subtitle: 'Tools for teams of any size.',
    bg: 'bg-white',
    features: [
      { icon: '👥', title: 'Role-Based Access', description: 'Assign roles and permissions to team members with granular access control.' },
      { icon: '🏢', title: 'Multi-Tenant Support', description: 'Manage multiple organizations or brands from a single admin interface.' },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 px-6 bg-gradient-to-b from-bg-soft to-white">
        <div className="max-w-7xl mx-auto text-center">
          <SectionHeader
            badge="Platform Features"
            title="Everything You Need for Digital Signage"
            subtitle="A complete platform for creating, managing, and publishing content to any screen."
          />
        </div>
      </section>

      {/* Feature Categories */}
      {categories.map((cat, idx) => (
        <section key={cat.badge} className={`py-20 px-6 ${cat.bg}`}>
          <div className="max-w-7xl mx-auto">
            <SectionHeader badge={cat.badge} title={cat.title} subtitle={cat.subtitle} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.features.map((f, i) => (
                <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.description} delay={i * 0.08} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTABanner />
    </>
  );
}
