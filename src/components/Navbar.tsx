'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/use-cases', label: 'Use Cases' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/hardware', label: 'Hardware & Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-border shadow-sm'
          : 'bg-white/80 backdrop-blur-xl'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image src="/logo.png" alt="Displira" width={130} height={36} priority />
        </Link>

        {/* Desktop Links */}
        <div className="hidden min-[900px]:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === link.href
                  ? 'text-primary bg-primary/5'
                  : 'text-text-secondary hover:text-text hover:bg-bg-soft'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="/demo"
            className="hidden min-[900px]:inline-flex px-5 py-2 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary-dark transition-colors"
          >
            Request Demo
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="min-[900px]:hidden p-2 text-text-secondary hover:text-text"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="min-[900px]:hidden bg-white/95 backdrop-blur-xl border-t border-border">
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-primary bg-primary/5'
                    : 'text-text-secondary hover:text-text hover:bg-bg-soft'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/demo"
              className="mt-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-full text-center hover:bg-primary-dark transition-colors"
            >
              Request Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
