"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "./button"
import { Sheet, SheetContent, SheetTrigger } from "./sheet"
import { Menu } from "lucide-react"

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-tradefinder-primary/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto py-4 px-4 lg:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/images/logo/tradefinder_white.svg"
              alt="TradeFinder Logo"
              width={150}
              height={40}
              className="hidden dark:block"
            />
            <Image
              src="/assets/images/logo/tradefinder_black.svg"
              alt="TradeFinder Logo"
              width={150}
              height={40}
              className="block dark:hidden"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/blog" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Blog
          </Link>
          <Link href="/updates" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Updates
          </Link>
          <Link href="/testimonial" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Testimonial
          </Link>
          <Link href="/login" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Login
          </Link>
          <Button asChild className="bg-tradefinder-blue hover:bg-tradefinder-blue/90">
            <Link href="/payments">
              Buy Now
            </Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-tradefinder-primary border-tradefinder-gray-dark">
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  href="/blog"
                  className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
                >
                  Blog
                </Link>
                <Link
                  href="/updates"
                  className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
                >
                  Updates
                </Link>
                <Link
                  href="/testimonial"
                  className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
                >
                  Testimonial
                </Link>
                <Link
                  href="/login"
                  className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
                >
                  Login
                </Link>
                <Button asChild className="bg-tradefinder-blue hover:bg-tradefinder-blue/90 mt-4">
                  <Link href="/payments">
                    Buy Now
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
