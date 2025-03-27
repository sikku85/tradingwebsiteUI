"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export function PricingSection() {
  return (
    <section className="py-24 bg-tradefinder-primary border-t border-tradefinder-gray-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          Don't Just Trade. Dominate!
        </h2>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-tradefinder-secondary border-tradefinder-gray-dark overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Left side - features */}
              <div className="p-8 flex-1 border-b md:border-b-0 md:border-r border-tradefinder-gray-dark">
                <div className="space-y-4">
                  <FeatureItem text="Get Instant Access Now" />
                  <FeatureItem text="Watch Tutorials Inside" />
                  <FeatureItem text="View All Strategies" />
                  <FeatureItem text="Prepare For Tomorrow" />
                </div>
              </div>

              {/* Right side - pricing */}
              <div className="p-8 flex-1">
                <div className="mb-4">
                  <div className="inline-block px-3 py-1 bg-tradefinder-blue/20 text-tradefinder-blue rounded text-sm font-semibold mb-3">
                    DIAMOND
                  </div>
                  <div className="mb-2">
                    <div className="text-gray-400 text-sm">Total</div>
                    <div className="text-white text-4xl font-bold">₹ 4,999</div>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="text-gray-400 text-sm">Validity = 6 MONTHS</div>
                    <div className="bg-tradefinder-blue/30 text-tradefinder-blue text-xs px-2 py-1 rounded font-medium">
                      + 6 MONTHS FREE
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button asChild className="w-full bg-tradefinder-blue hover:bg-tradefinder-blue/90">
                      <Link href="/payments">
                        Buy Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="text-center mt-6 text-tradefinder-gray-light text-sm">
            How to Use / Instruction Video included inside
          </div>

          <div className="mt-16">
            <h3 className="text-xl font-semibold mb-8 text-white">Unlock Everything:</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-tradefinder-blue mr-2" />
                  <span className="text-tradefinder-gray-light text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-center space-x-3">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-tradefinder-blue/20 flex items-center justify-center">
        <Check className="h-4 w-4 text-tradefinder-blue" />
      </div>
      <span className="text-tradefinder-gray-light">{text}</span>
    </div>
  )
}

const features = [
  "Trading Journal",
  "FII - DII Scanner",
  "Delivery Scanner",
  "Games",
  "TradeStream Live",
  "Watchlist",
  "Calendar",
  "Calculator",
  "Market Pulse",
  "Insider Strategy",
  "Sector Scope",
  "Swing Spectrum",
  "Option Clock",
  "Option Apex",
  "Trade Tutor",
]
