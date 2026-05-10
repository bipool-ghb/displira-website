'use client';

import { useState, FormEvent } from 'react';
import SectionHeader from '@/components/SectionHeader';
import RevealOnScroll from '@/components/RevealOnScroll';

export default function DemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload: Record<string, string> = {};
    fd.forEach((v, k) => { payload[k] = v.toString(); });

    try {
      await fetch('https://api.displira.com/api/v1/inquiries/demo', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' },
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <section className="py-32 px-6">
        <div className="max-w-lg mx-auto text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-text mb-3">Thank You!</h2>
          <p className="text-text-secondary">
            We&apos;ve received your demo request. Our team will reach out within 24 hours to schedule your personalized demo.
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="py-20 px-6 bg-gradient-to-b from-bg-soft to-white">
        <div className="max-w-7xl mx-auto text-center">
          <SectionHeader
            badge="Request a Demo"
            title="See Displira in Action"
            subtitle="Fill out the form below and our team will schedule a personalized demo for your business."
          />
        </div>
      </section>

      <section className="pb-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <RevealOnScroll>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text mb-1.5">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2.5 border border-border rounded-xl text-sm text-text bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>

              {/* Business Name */}
              <div>
                <label htmlFor="business" className="block text-sm font-medium text-text mb-1.5">Business Name *</label>
                <input
                  type="text"
                  id="business"
                  name="business"
                  required
                  className="w-full px-4 py-2.5 border border-border rounded-xl text-sm text-text bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>

              {/* Email */}
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

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-text mb-1.5">Phone / WhatsApp</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2.5 border border-border rounded-xl text-sm text-text bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>

              {/* Business Type */}
              <div>
                <label htmlFor="businessType" className="block text-sm font-medium text-text mb-1.5">Business Type *</label>
                <select
                  id="businessType"
                  name="businessType"
                  required
                  className="w-full px-4 py-2.5 border border-border rounded-xl text-sm text-text bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                >
                  <option value="">Select...</option>
                  <option>Restaurant / Cafe</option>
                  <option>Retail Store</option>
                  <option>Grocery / Supermarket</option>
                  <option>Corporate Office</option>
                  <option>School / University</option>
                  <option>Clinic / Hospital</option>
                  <option>Community Center</option>
                  <option>Events / Conference</option>
                  <option>Hotel / Hospitality</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Number of Screens */}
              <div>
                <label htmlFor="screens" className="block text-sm font-medium text-text mb-1.5">Number of Screens *</label>
                <select
                  id="screens"
                  name="screens"
                  required
                  className="w-full px-4 py-2.5 border border-border rounded-xl text-sm text-text bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                >
                  <option value="">Select...</option>
                  <option>1-3</option>
                  <option>4-10</option>
                  <option>11-25</option>
                  <option>26-50</option>
                  <option>50+</option>
                </select>
              </div>

              {/* Location */}
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-text mb-1.5">Location / City</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="w-full px-4 py-2.5 border border-border rounded-xl text-sm text-text bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>

              {/* Interested In */}
              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-text mb-1.5">Interested In</label>
                <select
                  id="interest"
                  name="interest"
                  className="w-full px-4 py-2.5 border border-border rounded-xl text-sm text-text bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                >
                  <option value="">Select...</option>
                  <option>Software Only</option>
                  <option>Software + Hardware</option>
                  <option>Full Setup (Software + Hardware + Installation)</option>
                  <option>Enterprise Solution</option>
                </select>
              </div>

              {/* Preferred Contact */}
              <div>
                <label htmlFor="contactMethod" className="block text-sm font-medium text-text mb-1.5">Preferred Contact Method</label>
                <select
                  id="contactMethod"
                  name="contactMethod"
                  className="w-full px-4 py-2.5 border border-border rounded-xl text-sm text-text bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                >
                  <option value="">Select...</option>
                  <option>Email</option>
                  <option>Phone</option>
                  <option>WhatsApp</option>
                  <option>Video Call</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text mb-1.5">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2.5 border border-border rounded-xl text-sm text-text bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors disabled:opacity-60"
              >
                {loading ? 'Submitting...' : 'Submit Request'}
              </button>
            </form>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
