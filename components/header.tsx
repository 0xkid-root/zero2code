'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
        <div className="hidden md:flex items-center gap-8">
          <Link href="#courses" className="text-foreground hover:text-primary transition">
            Courses
          </Link>
          <Link href="#outcomes" className="text-foreground hover:text-primary transition">
            Training Programs
          </Link>
          <Link href="#pricing" className="text-foreground hover:text-primary transition">
            Pricing
          </Link>
          <Link href="#testimonials" className="text-foreground hover:text-primary transition">
            Testimonials
          </Link>

          <Link href="#faq" className="text-foreground hover:text-primary transition">
            FAQ
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
            Register
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
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="#courses" className="text-foreground hover:text-primary transition py-2">
              Courses
            </Link>
            <Link href="#outcomes" className="text-foreground hover:text-primary transition py-2">
              Outcomes
            </Link>
            <Link href="#pricing" className="text-foreground hover:text-primary transition py-2">
              Pricing
            </Link>
            <Link href="#faq" className="text-foreground hover:text-primary transition py-2">
              FAQ
            </Link>
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
