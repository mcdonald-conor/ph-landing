import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      content:
        "Practice Hero has transformed my 10-minute consultations. I can now quickly understand a patient's complex history without scrolling through endless records. It's become essential for my NHS practice.",
      author: "Dr. Sarah Johnson",
      role: "GP Partner, NHS Leeds",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      content:
        "With the pressures on NHS primary care, Practice Hero gives me back precious minutes with each patient. The hotkey feature means I can get summaries without disrupting my workflow.",
      author: "Dr. Michael Chen",
      role: "NHS GP, Manchester CCG",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      content:
        "As a locum GP working across different practices with various EHR systems, Practice Hero has been invaluable. It works with SystmOne, EMIS, and Vision - saving me from hunting through unfamiliar record layouts.",
      author: "Dr. Emma Williams",
      role: "Locum GP, NHS London",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <div id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by NHS healthcare professionals
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            See what doctors across the NHS are saying about Practice Hero
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg border-0">
              <CardContent className="p-6">
                <QuoteIcon className="h-8 w-8 text-primary mb-4" />
                <p className="text-gray-600 mb-6">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-4">
                    <Image
                      className="h-12 w-12 rounded-full"
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">{testimonial.author}</h4>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

