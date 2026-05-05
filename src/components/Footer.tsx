import Link from 'next/link';
import Image from 'next/image';

const productLinks = [
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/hardware', label: 'Hardware & Services' },
  { href: '/use-cases', label: 'Use Cases' },
];

const companyLinks = [
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/feedback', label: 'Feedback' },
];

const getStartedLinks = [
  { href: '/demo', label: 'Request a Demo' },
  { href: '/pricing', label: 'View Pricing' },
  { href: '/contact', label: 'Contact Sales' },
];

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Image
              src="/logo-dark.png"
              alt="Displira"
              width={130}
              height={36}
              className="mb-4"
            />
            <p className="text-text-light text-sm leading-relaxed">
              Modern digital signage platform for businesses of all sizes. Create, manage, and publish content to any screen.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-light mb-4">Product</h4>
            <ul className="flex flex-col gap-2.5">
              {productLinks.map((link) => (
                <li key={link.href}>
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
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Started */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-light mb-4">Get Started</h4>
            <ul className="flex flex-col gap-2.5">
              {getStartedLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-sm text-text-light">&copy; 2026 Displira. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
