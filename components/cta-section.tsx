"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { ToastProvider } from "@/components/ui/toast"
import { Clock, Users, ExternalLink } from "lucide-react"

export default function CTASection() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    toast({
      title: "Download link sent!",
      description: "Check your email for instructions to download and install Practice Hero.",
    })

    // Reset form
    e.currentTarget.reset()
  }

  return (
    <div id="download" className="bg-primary py-16">
      <ToastProvider>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Ready to transform your GP practice?
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-white opacity-90">
                Join thousands of GPs who have reclaimed their consultation time with Practice Hero.
              </p>

              <div className="mt-6 bg-white/10 rounded-lg p-4 border border-white/20">
                <p className="italic text-white text-sm">
                  "The median time taken for a clinician to read through and assimilate the information in the EHRs
                  before summarising, was seven minutes."
                </p>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-white/80 text-xs">
                    — Shemtob L, et al. (2025). Comparing AI- versus clinician-authored summaries of simulated primary
                    care electronic health records.
                  </p>
                  <a
                    href="https://www.medrxiv.org/content/10.1101/2025.02.21.25322674v1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white text-xs flex items-center"
                  >
                    <ExternalLink className="h-3 w-3 mr-1" />
                    View Study
                  </a>
                </div>
              </div>

              <div className="mt-8 space-y-4 sm:space-y-0 sm:flex sm:items-center">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Clock className="h-10 w-10 text-white" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-white">Streamline your workflow</h3>
                    <p className="text-white opacity-90">Before, during, and between appointments</p>
                  </div>
                </div>
                <div className="sm:ml-6 flex items-center">
                  <div className="flex-shrink-0">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-white">Reduce GP burnout</h3>
                    <p className="text-white opacity-90">Less screen time, more patient time</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/2">
              <div className="bg-white rounded-lg shadow-xl p-6">
                <h3 className="text-lg font-medium text-gray-900">Download Practice Hero for Your GP Surgery</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Stop rushing through complex patient histories or running late with appointments. Practice Hero helps
                  you manage both effectively.
                </p>
                <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" required />
                  </div>
                  <div>
                    <Label htmlFor="email">NHS Email Address</Label>
                    <Input id="email" name="email" type="email" placeholder="name@nhs.net" required />
                  </div>
                  <div>
                    <Label htmlFor="practice">GP Practice Name</Label>
                    <Input id="practice" name="practice" placeholder="e.g., Oakwood Medical Practice" required />
                  </div>
                  <div>
                    <Label htmlFor="system">Practice System</Label>
                    <Input id="system" name="system" placeholder="EMIS Web, SystmOne, Vision, etc." required />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Processing..." : "Download Free Trial"}
                  </Button>
                  <p className="text-xs text-gray-500 mt-2">
                    By downloading, you agree to our privacy policy and terms of service. Works with all major GP
                    clinical systems including EMIS Web, SystmOne, and Vision.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </ToastProvider>
    </div>
  )
}

