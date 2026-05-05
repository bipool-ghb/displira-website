'use client';

import { useState, FormEvent } from 'react';
import SectionHeader from '@/components/SectionHeader';
import RevealOnScroll from '@/components/RevealOnScroll';

export default function FeedbackPage() {
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

  if (submitted) {
    return (
      <section className="py-32 px-6">
        <div className="max-w-lg mx-auto text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-text mb-3">Thank You for Your Feedback!</h2>
          <p className="text-text-secondary">
            Your input helps us build a better product. We appreciate you taking the time to share your thoughts.
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
            badge="Feedback"
            title="Help Us Build Better"
            subtitle="Share your thoughts, feature requests, and ideas. Your feedback shapes Displira."
          />
        </div>
      </section>

      <section className="pb-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <RevealOnScroll>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text mb-1.5">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
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

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-text mb-1.5">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-2.5 border border-border rounded-xl text-sm text-text bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>

              {/* Use Case */}
              <div>
                <label htmlFor="useCase" className="block text-sm font-medium text-text mb-1.5">What is your primary use case?</label>
                <input
                  type="text"
                  id="useCase"
                  name="useCase"
                  placeholder="e.g., Restaurant menu boards, office announcements..."
                  className="w-full px-4 py-2.5 border border-border rounded-xl text-sm text-text bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>

              {/* Important Features */}
              <div>
                <label htmlFor="features" className="block text-sm font-medium text-text mb-1.5">What features are most important to you?</label>
                <textarea
                  id="features"
                  name="features"
                  rows={3}
                  placeholder="e.g., Scheduling, templates, multi-location support..."
                  className="w-full px-4 py-2.5 border border-border rounded-xl text-sm text-text bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                />
              </div>

              {/* Device */}
              <div>
                <label htmlFor="device" className="block text-sm font-medium text-text mb-1.5">What device(s) do you plan to use?</label>
                <input
                  type="text"
                  id="device"
                  name="device"
                  placeholder="e.g., Fire TV Stick, Android TV, Smart TV..."
                  className="w-full px-4 py-2.5 border border-border rounded-xl text-sm text-text bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>

              {/* Budget */}
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-text mb-1.5">Budget Range</label>
                <select
                  id="budget"
                  name="budget"
                  className="w-full px-4 py-2.5 border border-border rounded-xl text-sm text-text bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                >
                  <option value="">Select...</option>
                  <option>Under $50/month</option>
                  <option>$50-$100/month</option>
                  <option>$100-$300/month</option>
                  <option>$300+/month</option>
                  <option>Not sure yet</option>
                </select>
              </div>

              {/* Comments */}
              <div>
                <label htmlFor="comments" className="block text-sm font-medium text-text mb-1.5">Additional Comments</label>
                <textarea
                  id="comments"
                  name="comments"
                  rows={4}
                  className="w-full px-4 py-2.5 border border-border rounded-xl text-sm text-text bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors disabled:opacity-60"
              >
                {loading ? 'Submitting...' : 'Submit Feedback'}
              </button>
            </form>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
