import Image from "next/image"

export default function HowItWorksSection() {
  const steps = [
    {
      id: 1,
      title: "Install Practice Hero on your computer",
      description:
        "Download and install our lightweight desktop application. Compatible with Windows and macOS systems used across NHS practices.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "View a patient record in your EHR",
      description:
        "Open any patient record in your existing electronic health record system, just as you normally would.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "Press the Practice Hero hotkey (Alt+H)",
      description:
        "With the patient record on screen, simply press Alt+H (or your custom hotkey). Practice Hero instantly captures and processes what's displayed.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "Review the generated summary",
      description:
        "A concise, structured summary appears in seconds, highlighting key medical history, recent visits, medications, and important notes.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <div id="how-it-works" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">How It Works</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Simple, efficient, and secure
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Practice Hero works alongside your existing systems with no integration required
          </p>
        </div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`relative ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } flex flex-col lg:flex-row items-center`}
            >
              <div className="flex-1">
                <div className={`${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center">
                      <span className="text-lg font-medium">{step.id}</span>
                    </div>
                    <h3 className="ml-4 text-2xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="mt-3 text-lg text-gray-500 ml-14">{step.description}</p>
                </div>
              </div>
              <div className="flex-1 mt-10 lg:mt-0">
                <Image
                  src={step.image || "/placeholder.svg"}
                  alt={step.title}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

