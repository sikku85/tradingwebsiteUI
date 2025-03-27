"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-tradefinder-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          What Our Users Say
        </h2>

        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="border-tradefinder-gray-dark bg-tradefinder-secondary h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="mb-4">
                        <h3 className="text-tradefinder-blue font-semibold">{testimonial.name}</h3>
                      </div>
                      <p className="text-tradefinder-gray-light text-sm">
                        "{testimonial.comment}"
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden sm:flex justify-end gap-2 mt-8">
            <CarouselPrevious className="static bg-tradefinder-gray-dark hover:bg-tradefinder-blue border-tradefinder-gray-dark" />
            <CarouselNext className="static bg-tradefinder-gray-dark hover:bg-tradefinder-blue border-tradefinder-gray-dark" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}

const testimonials = [
  {
    name: "Shivam Bhoir",
    comment: "TradeFinder changed my trading game! Now I can easily understand where the big players stand in Nifty BankNifty options. It's like having a secret weapon in the market. Best tool for option buyers. Kudos Team TradeFinder"
  },
  {
    name: "Nisha B.",
    comment: "Now I can confidently make decisions knowing I have insights into the positions of big players. Making good returns from trading is quite easy now as I get best stocks to trade in live market"
  },
  {
    name: "Anil Nair",
    comment: "I've tried many trading tools, but none compare to TradeFinder. It's intuitive, accurate, and has helped me stay ahead of the curve in options trading."
  },
  {
    name: "Rahul Saini",
    comment: "I feel happy taking TradeFinder subscription and started trading again currently not earning that much but I am happy that now I am able to make small profits consistantly."
  },
  {
    name: "Priya M.",
    comment: "With tradefinder's easy-to-use interface, I can quickly spot momentum stocks, giving me the edge I need in trading, Thanks TradeFinder for making this feature."
  },
  {
    name: "K Rajesh",
    comment: "After started trading with TradeFinder my journey started moving upside. Loss are small and in control, but profits are much bigger using TradeFinder's Option Apex"
  }
]
