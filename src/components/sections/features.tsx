"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function FeaturesSection() {
  return (
    <section className="py-24 bg-tradefinder-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          Everything A Trader Needs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Option Apex */}
          <FeatureCard
            title="Option Apex"
            image="/assets/tg_icons/1.png"
            features={[
              "Track big player positions",
              "Identify The True Trend",
              "Time your Entry - Exit"
            ]}
          />

          {/* Option Clock */}
          <FeatureCard
            title="Option Clock"
            image="/assets/tg_icons/2.png"
            features={[
              "Avoid False Breakout",
              "Increase Trading Accuracy",
              "Hold Winning Trades"
            ]}
          />

          {/* Swing Spectrum */}
          <FeatureCard
            title="Swing Spectrum"
            image="/assets/tg_icons/3.png"
            features={[
              "Find BO Stocks",
              "Find Reversal Stocks",
              "Get Broader Market Trend"
            ]}
          />

          {/* Insider Strategy */}
          <FeatureCard
            title="Insider Strategy"
            image="/assets/tg_icons/3.png"
            features={[
              "Premium Backtested Strategies",
              "Defined Entry Exit Criteria",
              "Trade without confusion"
            ]}
          />
        </div>
      </div>
    </section>
  )
}

interface FeatureCardProps {
  title: string
  image: string
  features: string[]
}

function FeatureCard({ title, image, features }: FeatureCardProps) {
  return (
    <Card className="feature-card border-tradefinder-gray-dark bg-tradefinder-secondary">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-tradefinder-blue">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Image src="/assets/tg_icons/1.png" alt="Tick" width={20} height={20} className="mt-1" />
              <span className="text-tradefinder-gray-light">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
