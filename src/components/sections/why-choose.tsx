"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Calendar, Calculator, BarChart3, LineChart, PieChart, ActivitySquare, TrendingUp } from "lucide-react"

export function WhyChooseSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-tradefinder-primary to-tradefinder-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          Why Choose TradeFinder?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ReasonCard
            icon={<FileText className="h-10 w-10 text-tradefinder-blue" />}
            title="Trading Journal"
            description="Record trades, improve & became profitable."
          />
          <ReasonCard
            icon={<BarChart3 className="h-10 w-10 text-tradefinder-blue" />}
            title="Market Pulse"
            description="Find hot stocks in Live Market"
          />
          <ReasonCard
            icon={<TrendingUp className="h-10 w-10 text-tradefinder-blue" />}
            title="FII-DII Data"
            description="Insights into FIIs and DIIs positioning."
          />
          <ReasonCard
            icon={<LineChart className="h-10 w-10 text-tradefinder-blue" />}
            title="Watchlist"
            description="Monitor stocks with custom watchlist."
          />
          <ReasonCard
            icon={<Calendar className="h-10 w-10 text-tradefinder-blue" />}
            title="Calendar"
            description="Use calendar to spot market volatility."
          />
          <ReasonCard
            icon={<Calculator className="h-10 w-10 text-tradefinder-blue" />}
            title="Calculator"
            description="Manage risk & position with our custom calculators"
          />
          <ReasonCard
            icon={<PieChart className="h-10 w-10 text-tradefinder-blue" />}
            title="Trade Tutor"
            description="A complete guide & tutorial of all TradeFinder features"
          />
          <ReasonCard
            icon={<ActivitySquare className="h-10 w-10 text-tradefinder-blue" />}
            title="Games"
            description="Real-world trading simulation toolkit."
          />
        </div>
      </div>
    </section>
  )
}

interface ReasonCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function ReasonCard({ icon, title, description }: ReasonCardProps) {
  return (
    <Card className="feature-card border-tradefinder-gray-dark bg-tradefinder-secondary">
      <CardContent className="pt-6">
        <div className="flex flex-col">
          <div className="mb-4">
            {icon}
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">
            {title}
          </h3>
          <p className="text-sm text-tradefinder-gray-light">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
