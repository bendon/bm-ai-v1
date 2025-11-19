'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/10 px-4 py-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl md:text-3xl font-black tracking-[2px] uppercase flex items-center h-10"
        >
          BM
        </Link>
        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 list-none items-center">
          {/* Menu items */}
          <li><Link href="/#services" className="text-white/80 hover:text-white transition-colors font-medium">Services</Link></li>
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
            href="http://bmaiapp.payl.to/"
            className="bg-white text-black px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold text-sm md:text-base text-center hover:bg-white/90 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sign Up
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
            <li><Link href="/#services" className="block text-white/80 hover:text-white py-2 font-medium" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
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
              href="http://bmaiapp.payl.to/"
              className="w-full bg-white text-black px-6 py-3 rounded-lg font-semibold text-center hover:bg-white/90 transition-all"
              onClick={() => setIsMenuOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 