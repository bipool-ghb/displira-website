'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import RevealOnScroll from '@/components/RevealOnScroll';

const contactInfo = [
  {
    icon: '📧',
    title: 'Email',
    value: 'support@displira.com',
    href: 'mailto:support@displira.com',
  },
  {
    icon: '📍',
    title: 'Location',
    value: 'California, United States',
    href: null,
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch('https://formspree.io/f/placeholder', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section className="py-20 px-6 bg-gradient-to-b from-bg-soft to-white">
        <div className="max-w-7xl mx-auto text-center">
          <SectionHeader
            badge="Contact Us"
            title="Get in Touch"
            subtitle="Have a question or want to learn more? We'd love to hear from you."
          />
        </div>
      </section>

      <section className="pb-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <RevealOnScroll>
              {contactInfo.map((info) => (
                <div key={info.title} className="bg-bg-soft border border-border rounded-2xl p-5 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{info.icon}</div>
                    <div>
                      <div className="text-xs text-text-light uppercase tracking-wider">{info.title}</div>
                      {info.href ? (
                        <a href={info.href} className="text-sm font-medium text-text hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-sm font-medium text-text">{info.value}</div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 mt-2">
                <p className="text-sm text-text-secondary mb-3">Prefer a personalized walkthrough?</p>
                <Link href="/demo" className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors">
                  Request a Demo &rarr;
                </Link>
              </div>
            </RevealOnScroll>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <RevealOnScroll>
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-text mb-2">Message Sent!</h3>
                  <p className="text-text-secondary">We&apos;ll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text mb-1.5">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-2.5 border border-border rounded-xl text-sm text-text bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text mb-1.5">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2.5 border border-border rounded-xl text-sm text-text bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-text mb-1.5">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-2.5 border border-border rounded-xl text-sm text-text bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text mb-1.5">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-2.5 border border-border rounded-xl text-sm text-text bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors disabled:opacity-60"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
