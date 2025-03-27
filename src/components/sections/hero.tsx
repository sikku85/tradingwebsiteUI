"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden hero-gradient">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Column - Text Content */}
          <div className="flex-1 max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">India's</span>{" "}
              <span className="text-tradefinder-blue">No. 1</span>
              <br />
              <span className="text-white">Trade Finder</span>
            </h1>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-2">
                <Image src="/assets/tg_icons/1.png" alt="Tick" width={20} height={20} />
                <p className="text-lg text-tradefinder-gray-light">Find Best Trades In Live Market</p>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/assets/tg_icons/1.png" alt="Tick" width={20} height={20} />
                <p className="text-lg text-tradefinder-gray-light">Accurately Enter & Exit Trade</p>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/assets/tg_icons/1.png" alt="Tick" width={20} height={20} />
                <p className="text-lg text-tradefinder-gray-light">Use Small Capital Efficiently</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-tradefinder-blue hover:bg-tradefinder-blue/90 text-white">
                <Link href="/login">
                  Login Now
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-tradefinder-blue text-tradefinder-blue hover:bg-tradefinder-blue/10">
                <Link href="/payments">
                  Buy Now
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex-1 relative">
            <div className="relative w-full h-[400px] lg:h-[450px] blue-glow">
              <Image
                src="/assets/newloginpage/right_image.png"
                alt="TradeFinder App"
                fill
                className="z-10 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
