import { Clock, FileText, Search, Brain, Shield, Repeat } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      name: "Works with Any EHR System",
      description: "Compatible with all NHS electronic health record systems - no integration or setup required.",
      icon: FileText,
    },
    {
      name: "One-Press Activation",
      description: "Simply press a hotkey while viewing a patient record to generate an instant summary.",
      icon: Clock,
    },
    {
      name: "Reduce Context Switching",
      description: "Quickly get up to speed between patients, improving your focus and reducing mental fatigue.",
      icon: Repeat,
    },
    {
      name: "NHS-Tailored Summaries",
      description: "AI trained specifically on NHS patient records and UK medical standards.",
      icon: Brain,
    },
    {
      name: "Fully GDPR Compliant",
      description: "All processing happens locally on your device - no patient data ever leaves your computer.",
      icon: Shield,
    },
    {
      name: "Contextual Understanding",
      description: "Identifies key medical history, medications, test results, and previous consultations.",
      icon: Search,
    },
  ]

  return (
    <div id="features" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Designed for busy NHS professionals
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Autobrief helps you focus on what matters most - your patients.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

