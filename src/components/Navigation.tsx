'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const solutionsDropdown = [
    { href: '/inbound', label: 'Inbound AI' },
    { href: '/outbound', label: 'Outbound AI' },
    { href: '/#usps', label: 'Features' },
    { href: '/#use-cases', label: 'Use Cases' },
  ];

  const menuItems = [
    { label: 'Solutions', dropdown: true },
    { href: '/#demo', label: 'How it Works' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/10 px-4 py-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-[2px] uppercase">BM</Link>
        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 list-none items-center">
          {/* Solutions Dropdown */}
          <li className="relative">
            <button
              className="flex items-center gap-1 text-white/80 hover:text-white transition-colors font-medium focus:outline-none"
              onClick={() => setIsDropdownOpen((open) => !open)}
              onBlur={() => setTimeout(() => setIsDropdownOpen(false), 150)}
            >
              Solutions <FiChevronDown size={16} />
            </button>
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-black border border-white/10 rounded-lg shadow-xl z-50">
                {solutionsDropdown.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 transition-colors rounded-lg"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          {/* Other menu items */}
          <li><Link href="/#demo" className="text-white/80 hover:text-white transition-colors font-medium">How it Works</Link></li>
          <li><Link href="/pricing" className="text-white/80 hover:text-white transition-colors font-medium">Pricing</Link></li>
          <li><Link href="/contact" className="text-white/80 hover:text-white transition-colors font-medium">Contact</Link></li>
        </ul>
        {/* Always visible CTAs */}
        <div className="flex gap-2 ml-4">
          <Link
            href="/#demo"
            className="bg-white/10 text-white border border-white/30 px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold text-sm md:text-base text-center hover:bg-white/20 transition-all hidden xs:inline-block"
          >
            Experience Demo
          </Link>
          <Link
            href="/contact"
            className="bg-white text-black px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold text-sm md:text-base text-center hover:bg-white/90 transition-all"
          >
            Get Started
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FiX size={24} className="stroke-1" /> : <FiMenu size={24} className="stroke-1" />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-white/10 relative">
          <ul className="flex flex-col gap-4 mt-4 mb-28">
            {/* Solutions Dropdown (mobile) */}
            <li>
              <details>
                <summary className="text-white/80 hover:text-white py-2 font-medium cursor-pointer flex items-center gap-1">Solutions <FiChevronDown size={16} /></summary>
                <ul className="pl-4 mt-2">
                  {solutionsDropdown.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block text-white/80 hover:text-white py-2"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            <li><Link href="/#demo" className="block text-white/80 hover:text-white py-2 font-medium" onClick={() => setIsMenuOpen(false)}>How it Works</Link></li>
            <li><Link href="/pricing" className="block text-white/80 hover:text-white py-2 font-medium" onClick={() => setIsMenuOpen(false)}>Pricing</Link></li>
            <li><Link href="/contact" className="block text-white/80 hover:text-white py-2 font-medium" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
          {/* Floating action buttons at the bottom of mobile menu */}
          <div className="fixed left-0 right-0 bottom-0 z-50 bg-black/95 px-4 py-4 flex flex-col gap-3 md:hidden shadow-2xl border-t border-white/10">
            <Link
              href="/#demo"
              className="w-full bg-white/10 text-white border border-white/30 px-6 py-3 rounded-lg font-semibold text-center hover:bg-white/20 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience Demo
            </Link>
            <Link
              href="/#contact"
              className="w-full bg-white text-black px-6 py-3 rounded-lg font-semibold text-center hover:bg-white/90 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 