"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Send } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-tradefinder-primary border-t border-tradefinder-gray-dark pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="flex items-center mb-6">
              <Image
                src="/assets/images/logo/tradefinder_white.svg"
                alt="TradeFinder Logo"
                width={180}
                height={50}
                className="hidden dark:block"
              />
              <Image
                src="/assets/images/logo/tradefinder_black.svg"
                alt="TradeFinder Logo"
                width={180}
                height={50}
                className="block dark:hidden"
              />
            </Link>
            <div className="space-y-3 text-tradefinder-gray-light">
              <div className="flex items-start">
                <div className="mr-2">📍</div>
                <p>Kashimira, Thane, Thane, MH, 401107</p>
              </div>
              <div className="flex items-start">
                <div className="mr-2">📱</div>
                <p>+91 79778 78134</p>
              </div>
              <div className="flex items-start">
                <div className="mr-2">📧</div>
                <p>supt.tradefinder@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-8">
            <FooterColumn title="Terms Of Use">
              <FooterLink href="/disclaimer">Disclaimer</FooterLink>
              <FooterLink href="/refund-policy">Refund Policy</FooterLink>
              <FooterLink href="/disclosures">Disclosures</FooterLink>
              <FooterLink href="/terms-and-condition">Terms & Conditions</FooterLink>
              <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
            </FooterColumn>
            <FooterColumn title="Company">
              <FooterLink href="/about-us">About us</FooterLink>
              <FooterLink href="/contact-us">Contact us</FooterLink>
              <FooterLink href="/faq">FAQ</FooterLink>
              <FooterLink href="/status">Status</FooterLink>
            </FooterColumn>
            <FooterColumn title="Join the community">
              <div className="flex space-x-4">
                <Link href="https://insta.openinapp.co/rf16r" target="_blank" className="text-tradefinder-gray-light hover:text-white transition-colors">
                  <Instagram size={24} />
                </Link>
                <Link href="https://telegram.openinapp.co/6v6xf" target="_blank" className="text-tradefinder-gray-light hover:text-white transition-colors">
                  <Send size={24} />
                </Link>
              </div>
              <div className="mt-4">
                <Link href="/tradingview" className="text-tradefinder-blue hover:text-tradefinder-blue-light transition-colors text-sm">
                  TradeFinder has partnered with Tradingview for a Charting solution
                </Link>
              </div>
            </FooterColumn>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-tradefinder-gray-dark flex flex-col md:flex-row justify-between items-center text-tradefinder-gray-light text-sm">
          <p>© 2025 TradeFinder. All Rights Reserved</p>
          <div className="flex items-center mt-4 md:mt-0">
            <span>Made with </span>
            <span className="text-red-500 mx-1">❤</span>
            <span> in </span>
            <span className="ml-1">🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-semibold text-white mb-4">{title}</h3>
      <div className="space-y-3">{children}</div>
    </div>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="block text-tradefinder-gray-light hover:text-white transition-colors text-sm">
      {children}
    </Link>
  )
}
