import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold">ZeroTwoCode</span>
            </div>
            <p className="text-white/70 text-sm">
              Industry-oriented IT training for career transformation
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/70 hover:text-primary transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-primary transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-primary transition">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Programs</h3>
            <div className="space-y-2 text-sm">
              <Link href="#" className="text-white/70 hover:text-primary transition block">
                AWS Training
              </Link>
              <Link href="#" className="text-white/70 hover:text-primary transition block">
                Python Development
              </Link>
              <Link href="#" className="text-white/70 hover:text-primary transition block">
                Java Development
              </Link>
              <Link href="#" className="text-white/70 hover:text-primary transition block">
                Full-Stack Development
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Resources</h3>
            <div className="space-y-2 text-sm">
              <Link href="#" className="text-white/70 hover:text-primary transition block">
                Blog
              </Link>
              <Link href="#" className="text-white/70 hover:text-primary transition block">
                Success Stories
              </Link>
              <Link href="#" className="text-white/70 hover:text-primary transition block">
                FAQ
              </Link>
              <Link href="#" className="text-white/70 hover:text-primary transition block">
                Pricing
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3 text-white/70">
                <Mail size={18} className="flex-shrink-0 mt-0.5" />
                <a href="mailto:info@zerotwocode.com" className="hover:text-primary transition">
                  info@zerotwocode.com
                </a>
              </div>
              <div className="flex gap-3 text-white/70">
                <Phone size={18} className="flex-shrink-0 mt-0.5" />
                <a href="tel:+919876543210" className="hover:text-primary transition">
                  +91 9876543210
                </a>
              </div>
              <div className="flex gap-3 text-white/70">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm text-center md:text-left">
            © {currentYear} ZeroTwoCode. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-white/60 hover:text-primary transition">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/60 hover:text-primary transition">
              Terms of Service
            </Link>
            <Link href="#" className="text-white/60 hover:text-primary transition">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
