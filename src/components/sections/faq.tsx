"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  return (
    <section className="py-24 bg-tradefinder-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-tradefinder-gray-dark rounded-lg overflow-hidden bg-tradefinder-secondary px-0"
              >
                <AccordionTrigger className="px-6 py-4 text-white hover:no-underline hover:bg-tradefinder-gray-dark/20 data-[state=open]:bg-tradefinder-gray-dark/20">
                  <div className="flex items-center text-left">
                    <span className="mr-2 text-tradefinder-blue font-semibold">{index + 1}.</span>
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-tradefinder-gray-light">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

const faqs = [
  {
    question: "Is TradeFinder available on mobile devices?",
    answer: "Yes, TradeFinder is web based platform. It can work from any browser. You can use it on mobile, computer, laptop, tablet, iphone, ipad, blackberry devices as well."
  },
  {
    question: "Does TradeFinder offer educational resources for beginners?",
    answer: "Yes, we offer a variety of educational resources, including builtin tutorials to help beginners get started."
  },
  {
    question: "What is TradeFinder?",
    answer: "TradeFinder is an advanced trading platform which helps you find the best trades in live market based on smart money flow and premium strategies."
  },
  {
    question: "Who can use TradeFinder?",
    answer: "TradeFinder is designed for both novice and experienced traders, offering features that cater to various trading styles and strategies."
  },
  {
    question: "How does TradeFinder differentiate itself from other trading platforms?",
    answer: "TradeFinder stands out for its advanced scanners which are made by pro traders with real time experience. It is built by traders for traders."
  },
  {
    question: "Are there any additional costs or fees for using TradeFinder?",
    answer: "The costs are outlined in our subscription plans. There are no hidden fees."
  }
]
