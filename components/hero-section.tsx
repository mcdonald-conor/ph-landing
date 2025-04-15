import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, ArrowRight, ExternalLink, Brain, FileText, PanelLeft, Monitor, Workflow, Bot, Sparkles } from "lucide-react"

export default function HeroSection() {
  return (
    <div className="relative bg-slate-50 overflow-hidden">
      <div className="absolute inset-y-0 h-full w-full bg-gradient-to-br from-blue-50 to-slate-50 opacity-50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="relative z-10 pt-12 pb-8 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-16">
          <div className="text-center lg:text-left lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
            <div className="lg:col-span-5 max-w-2xl mx-auto lg:mx-0">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
                <Sparkles className="mr-1 h-4 w-4" />
                <span>Powered by Agentic AI</span>
              </div>

              <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
                <span className="block">Conquer information</span>{" "}
                <span className="block text-blue-600">overload before they arrive</span>
              </h1>

              <p className="mt-4 text-xl text-slate-600 sm:mt-5 sm:max-w-xl lg:mx-0">
                Practice Hero intelligently summarizes patient records <span className="font-medium">before consultations begin</span>, letting you prepare efficiently across any EHR system you already use.
              </p>

              <div id="research" className="mt-6 sm:mt-8 border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-md">
                <p className="text-sm text-slate-700">
                  <span className="font-medium">Research evidence:</span> A recent study found that GPs spend up to <span className="font-semibold">7 minutes</span> (70% of a standard 10-minute appointment) just reading through patient notes. <a href="https://www.medrxiv.org/content/10.1101/2025.02.21.25322674v1" className="text-blue-600 hover:text-blue-800 inline-flex items-center" target="_blank" rel="noopener noreferrer">Imperial College London Study <ExternalLink className="h-3 w-3 ml-1" /></a>
                </p>
              </div>

              <div className="mt-8">
                <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700 text-white" id="pilot">
                  <Link href="#pilot" className="flex items-center justify-center gap-2">
                    Join our pilot program
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="mt-10 lg:mt-0 lg:col-span-7">
              <div className="relative rounded-xl shadow-2xl overflow-hidden border border-slate-200 bg-white max-w-4xl mx-auto">
                <Image
                  className="w-full h-auto"
                  src="/demo.gif"
                  alt="Practice Hero showing instant patient record summarization before consultation"
                  width={1800}
                  height={1300}
                  priority
                />
                <div className="absolute bottom-0 right-0 bg-blue-600 text-white px-3 py-1 text-xs font-medium rounded-tl-md">
                  Demo in action
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 pb-16 sm:pb-20 lg:pb-24">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-5 rounded-xl shadow-md border border-slate-200 flex items-start">
              <div className="bg-blue-100 p-3 rounded-md mr-4">
                <Clock className="h-6 w-6 text-blue-700" />
              </div>
              <div>
                <h3 className="font-medium text-lg text-slate-900">Maximize your 10 minutes</h3>
                <p className="text-slate-600 mt-1">Prepare before patients arrive with AI-powered summaries</p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-md border border-slate-200 flex items-start">
              <div className="bg-blue-100 p-3 rounded-md mr-4">
                <Bot className="h-6 w-6 text-blue-700" />
              </div>
              <div>
                <h3 className="font-medium text-lg text-slate-900">Agentic AI technology</h3>
                <p className="text-slate-600 mt-1">Autonomously processes complex patient records to identify key insights</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
