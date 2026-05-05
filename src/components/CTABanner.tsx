import Link from 'next/link';
import RevealOnScroll from './RevealOnScroll';

export default function CTABanner() {
  return (
    <section className="py-20 px-6">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-primary-dark via-primary to-primary-light p-12 md:p-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Screens?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Join businesses worldwide using Displira to power their digital signage. Start your free pilot today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="px-8 py-3.5 bg-white text-primary font-semibold rounded-full hover:bg-white/90 transition-colors"
            >
              Request a Demo
            </Link>
            <Link
              href="/pricing"
              className="px-8 py-3.5 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
