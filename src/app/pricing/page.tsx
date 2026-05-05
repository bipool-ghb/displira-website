'use client';

import { useState } from 'react';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import RevealOnScroll from '@/components/RevealOnScroll';

interface Tier {
  name: string;
  monthlyPrice: string;
  annualPrice: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
  ctaHref: string;
}

const tiers: Tier[] = [
  {
    name: 'Starter',
    monthlyPrice: '$35',
    annualPrice: '$29',
    description: 'Perfect for small businesses getting started with digital signage.',
    features: [
      '1-3 screens',
      'Basic templates',
      'Basic scheduling',
      'Email support',
      'Single location',
      'Image & video support',
    ],
    cta: 'Get Started',
    ctaHref: '/demo',
  },
  {
    name: 'Business',
    monthlyPrice: '$95',
    annualPrice: '$79',
    description: 'For growing businesses that need more power and flexibility.',
    features: [
      '4-15 screens',
      'Advanced templates',
      'Device grouping & tags',
      'Analytics dashboard',
      'Feedback forms',
      'Multi-location',
      'Priority email support',
      'Scheduling by time & location',
    ],
    popular: true,
    cta: 'Get Started',
    ctaHref: '/demo',
  },
  {
    name: 'Enterprise',
    monthlyPrice: 'Custom',
    annualPrice: 'Custom',
    description: 'For large organizations with advanced needs and dedicated support.',
    features: [
      'Unlimited screens',
      'SSO-ready',
      'Custom hardware support',
      'Dedicated account manager',
      'Priority phone support',
      'Professional services',
      'Multi-tenant management',
      'Role-based access control',
      'Custom integrations',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
    ctaHref: '/contact',
  },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);

  return (
    <>
      <section className="py-20 px-6 bg-gradient-to-b from-bg-soft to-white">
        <div className="max-w-7xl mx-auto text-center">
          <SectionHeader
            badge="Pricing"
            title="Simple, Transparent Pricing"
            subtitle="Start small and scale as you grow. No hidden fees, no long-term contracts."
          />

          {/* Toggle */}
          <RevealOnScroll>
            <div className="flex items-center justify-center gap-3 mb-12">
              <span className={`text-sm font-medium ${!annual ? 'text-text' : 'text-text-light'}`}>Monthly</span>
              <button
                onClick={() => setAnnual(!annual)}
                className={`relative w-14 h-7 rounded-full transition-colors ${annual ? 'bg-primary' : 'bg-border'}`}
                aria-label="Toggle billing period"
              >
                <div className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-transform ${annual ? 'left-8' : 'left-1'}`} />
              </button>
              <span className={`text-sm font-medium ${annual ? 'text-text' : 'text-text-light'}`}>Annual</span>
              {annual && (
                <span className="px-2.5 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full">
                  Save 17%
                </span>
              )}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="pb-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <RevealOnScroll key={tier.name} delay={i * 0.1}>
              <div
                className={`relative rounded-2xl p-8 h-full flex flex-col ${
                  tier.popular
                    ? 'border-2 border-primary shadow-lg shadow-primary/10'
                    : 'border border-border'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                    Most Popular
                  </div>
                )}

                <h3 className="text-xl font-bold text-text mb-1">{tier.name}</h3>
                <p className="text-sm text-text-secondary mb-5">{tier.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-text">
                    {annual ? tier.annualPrice : tier.monthlyPrice}
                  </span>
                  {tier.monthlyPrice !== 'Custom' && (
                    <span className="text-text-secondary text-sm"> /month</span>
                  )}
                </div>

                <ul className="flex-1 flex flex-col gap-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={tier.ctaHref}
                  className={`block text-center py-3 rounded-full font-semibold text-sm transition-colors ${
                    tier.popular
                      ? 'bg-primary text-white hover:bg-primary-dark'
                      : 'bg-bg-soft text-text border border-border hover:border-primary hover:text-primary'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Pilot CTA */}
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto mt-16 text-center bg-bg-soft rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-bold text-text mb-2">Want to try before you commit?</h3>
            <p className="text-text-secondary mb-6">
              Start with a free pilot program. Set up a few screens and experience Displira with no obligation.
            </p>
            <Link
              href="/demo"
              className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors"
            >
              Start Your Free Pilot
            </Link>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
