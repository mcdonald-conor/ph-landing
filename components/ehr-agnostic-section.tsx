import Image from "next/image"
import { CheckCircle2, Database, Layers, Workflow, AlertCircle, Clock } from "lucide-react"

export default function EhrAgnosticSection() {
  return (
    <section id="ehr-systems" className="py-16 bg-white sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">System Agnostic</h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Works with your existing EHR system
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 lg:mx-auto">
            Practice Hero integrates seamlessly with any Electronic Health Record system, without requiring complex IT changes or learning a new platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-lg border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Pre-consultation workflow that saves time</h3>

              <div className="space-y-5">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-100 text-blue-600">
                      <Clock className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-slate-900">Prepare ahead of time</h4>
                    <p className="mt-1 text-slate-500">
                      Review patient summaries before appointments start, so you can use the full consultation time for patient care
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-100 text-blue-600">
                      <Database className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-slate-900">Works with all major EHR systems</h4>
                    <p className="mt-1 text-slate-500">
                      EMIS, SystmOne, Vision – Practice Hero works alongside any EHR system you already use
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-100 text-blue-600">
                      <Workflow className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-slate-900">Maintains your existing workflow</h4>
                    <p className="mt-1 text-slate-500">
                      No need to change how you work – Practice Hero enhances your current process without disruption
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-100 text-blue-600">
                      <Layers className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-slate-900">Handles growing patient data</h4>
                    <p className="mt-1 text-slate-500">
                      As patient records grow, Practice Hero scales to handle increasing complexity and volume
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-10" />
              <div className="p-1 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl">
                <div className="bg-white p-5 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-1.5" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-1.5" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <div className="ml-4 flex-1 h-6 bg-slate-100 rounded flex items-center px-3">
                      <span className="text-xs text-slate-400">practice-hero.app</span>
                    </div>
                  </div>

                  <div className="p-4 mb-4 bg-slate-50 rounded-lg border border-slate-200">
                    <h5 className="font-bold text-slate-800 mb-2">Patient Summary • Jane Smith</h5>
                    <div className="space-y-2 text-sm">
                      <p className="font-medium text-slate-900">Key Health Issues:</p>
                      <ul className="pl-5 space-y-1 text-slate-700">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mr-1 mt-0.5" />
                          <span>Type 2 Diabetes - diagnosed 2018, well controlled</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mr-1 mt-0.5" />
                          <span>Hypertension - current BP within target range</span>
                        </li>
                        <li className="flex items-start">
                          <AlertCircle className="h-4 w-4 text-amber-600 mr-1 mt-0.5" />
                          <span>Recent HbA1c elevation - follow up needed</span>
                        </li>
                      </ul>
                      <p className="font-medium text-slate-900 mt-3">Recent Consultations:</p>
                      <p className="text-slate-700">Last seen by Dr. Williams on 15/06/2023 for medication review</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-100 text-sm text-blue-800">
                    <p className="font-medium">Practice Hero summary ready before appointment</p>
                    <p className="text-blue-600 text-xs mt-1">Works with your current EHR system - no switching needed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
