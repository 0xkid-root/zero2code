'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'About Us', href: '#about' },
  {
    label: 'Training',
    href: '#training',
    dropdown: [
      { label: 'Summer Training', href: '#summer-training' },
      { label: 'Winter Training', href: '#winter-training' },
      { label: 'Industrial Training', href: '#industrial-training' },
      { label: 'Apprenticeship', href: '#apprenticeship' },
    ],
  },
  {
    label: 'Service',
    href: '#service',
    dropdown: [
      { label: 'Mentorship', href: '#mentorship' },
      { label: 'Code Review', href: '#code-review' },
      { label: 'Career Coaching', href: '#career-coaching' },
    ],
  },
  { label: 'Project', href: '#project' },
  { label: 'Blog', href: '#blog' },
  { label: 'Career', href: '#career' },
  { label: 'Contact Us', href: '#contact' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <span className="text-white font-bold text-lg">Z</span>
          </div>
          <span className="text-xl font-bold text-foreground">ZeroTwoCode</span>
        </div>

        {/* Desktop Menu */}
        <div ref={dropdownRef} className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="relative">
                <button
                  onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                  className="flex items-center gap-1 text-foreground hover:text-primary transition"
                >
                  {link.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      openDropdown === link.label ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-border rounded-lg shadow-lg py-1 z-50">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setOpenDropdown(null)}
                        className="block px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-primary/5 transition"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-foreground hover:text-primary transition"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
         <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
  <Link href="/register">Register</Link>
</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label}>
                  <button
                    onClick={() =>
                      setOpenMobileDropdown(
                        openMobileDropdown === link.label ? null : link.label
                      )
                    }
                    className="w-full flex items-center justify-between text-foreground hover:text-primary transition py-2"
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        openMobileDropdown === link.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {openMobileDropdown === link.label && (
                    <div className="pl-4 flex flex-col gap-1 border-l-2 border-primary/20 ml-2 mb-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => {
                            setOpenMobileDropdown(null)
                            setIsMenuOpen(false)
                          }}
                          className="text-sm text-foreground hover:text-primary transition py-1.5"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-foreground hover:text-primary transition py-2"
                >
                  {link.label}
                </Link>
              )
            )}

            <div className="pt-2">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full w-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}