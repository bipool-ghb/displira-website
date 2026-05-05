import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import CTABanner from '@/components/CTABanner';
import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata: Metadata = {
  title: 'About — Displira',
  description: 'Learn about Displira and our mission to make digital signage simple and affordable.',
};

const values = [
  {
    icon: '✨',
    title: 'Simplicity',
    description: 'Digital signage shouldn\'t require an IT team. Our platform is designed for anyone to use, with zero technical knowledge required.',
  },
  {
    icon: '💰',
    title: 'Affordability',
    description: 'Enterprise-grade features at prices small businesses can afford. No hidden fees, no long-term contracts.',
  },
  {
    icon: '🌍',
    title: 'Accessibility',
    description: 'Works with hardware you already own. No proprietary devices or vendor lock-in required.',
  },
  {
    icon: '🛡️',
    title: 'Reliability',
    description: 'Your screens stay on. Our platform is built for 24/7 uptime with automatic recovery and monitoring.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-20 px-6 bg-gradient-to-b from-bg-soft to-white">
        <div className="max-w-7xl mx-auto text-center">
          <SectionHeader badge="About Displira" title="Our Story" />
        </div>
      </section>

      {/* Story */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <RevealOnScroll>
            <div className="flex flex-col gap-5 text-base text-text-secondary leading-relaxed text-center">
              <p>
                Displira was born from a simple frustration: why is digital signage so complicated and expensive?
              </p>
              <p>
                We saw small businesses struggling with outdated paper signs, and large enterprises paying thousands for clunky signage software. We knew there had to be a better way.
              </p>
              <p>
                So we built Displira — a modern, cloud-based digital signage platform that anyone can use. From a single screen in a coffee shop to hundreds of displays across a retail chain, Displira makes it easy to create, manage, and publish beautiful content.
              </p>
              <p>
                Our platform is built on three principles: simplicity, affordability, and reliability. We believe every business deserves professional digital signage, regardless of their size or technical expertise.
              </p>
              <p>
                Today, Displira powers screens across restaurants, retail stores, clinics, schools, offices, and community centers worldwide. And we&apos;re just getting started.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-bg-soft">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="Our Values" title="What We Stand For" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <RevealOnScroll key={v.title} delay={i * 0.1}>
                <div className="bg-white border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow h-full">
                  <div className="text-3xl mb-4">{v.icon}</div>
                  <h3 className="text-lg font-semibold text-text mb-2">{v.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{v.description}</p>
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
