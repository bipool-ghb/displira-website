import Link from 'next/link';
import Image from 'next/image';

const productLinks = [
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/hardware', label: 'Hardware & Services' },
  { href: '/use-cases', label: 'Use Cases' },
];

const solutionLinks = [
  { href: '/use-cases', label: 'Restaurants' },
  { href: '/use-cases', label: 'Retail' },
  { href: '/use-cases', label: 'Grocery & Supermarkets' },
  { href: '/use-cases', label: 'Corporate Offices' },
];

const companyLinks = [
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/feedback', label: 'Feedback' },
];

const legalLinks = [
  { href: '/terms', label: 'Terms of Service' },
  { href: '/privacy', label: 'Privacy Policy' },
];

const getStartedLinks = [
  { href: '/demo', label: 'Request a Demo' },
  { href: '/contact', label: 'See Live Demo' },
  { href: '/demo', label: 'Start Free Pilot' },
];

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src="/logo-dark.png"
              alt="Displira"
              width={130}
              height={36}
              className="mb-4"
            />
            <p className="text-white/80 text-sm font-semibold mb-2">Digital Signage. Simplified.</p>
            <p className="text-text-light text-sm leading-relaxed mb-4">
              Displira helps businesses create, publish, and monitor content across screens, devices, and locations.
            </p>
            <p className="text-text-light text-sm">
              <a href="mailto:support@displira.com" className="hover:text-white transition-colors">support@displira.com</a>
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-light mb-4">Product</h4>
            <ul className="flex flex-col gap-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-light mb-4">Solutions</h4>
            <ul className="flex flex-col gap-2.5">
              {solutionLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-light mb-4">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-light mb-4">Legal</h4>
            <ul className="flex flex-col gap-2.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-light">&copy; 2026 Displira. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-text-light hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-text-light hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
