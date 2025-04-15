import {
  Brain,
  Clock,
  ListChecks,
  Calendar,
  UserCheck,
  Flame
} from "lucide-react"

export default function GpBenefitsSection() {
  return (
    <section id="benefits" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Designed for GPs, by GPs
          </h2>
          <p className="mt-4 text-xl text-slate-600">
            Practice Hero addresses the daily challenges you face, helping you deliver better care without the burnout.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Benefit Card 1 */}
          <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100 flex flex-col">
            <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
              <Brain className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Reduce Cognitive Load</h3>
            <p className="text-slate-600 flex-grow">
              Stop mentally juggling complex patient histories. Our AI summarizes key information, helping you stay focused and make better clinical decisions.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-100">
              <p className="text-sm text-blue-700 font-medium">
                "I used to feel mentally exhausted after back-to-back appointments. Practice Hero has made a huge difference." — Dr. Sarah Johnson
              </p>
            </div>
          </div>

          {/* Benefit Card 2 */}
          <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100 flex flex-col">
            <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Prevent Running Behind</h3>
            <p className="text-slate-600 flex-grow">
              Stay on schedule with your daily list. Prepare for each patient before they arrive, eliminating the scramble to review notes during the consultation.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-100">
              <p className="text-sm text-blue-700 font-medium">
                "My clinics now run on time consistently. Patients and staff notice the difference." — Dr. Michael Chen
              </p>
            </div>
          </div>

          {/* Benefit Card 3 */}
          <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100 flex flex-col">
            <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
              <UserCheck className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Maximize Patient Interaction</h3>
            <p className="text-slate-600 flex-grow">
              Spend more time making eye contact and connecting with patients, rather than scrolling through their records during precious consultation time.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-100">
              <p className="text-sm text-blue-700 font-medium">
                "My patients tell me they feel more heard now that I'm not constantly looking at the screen." — Dr. Emma Lewis
              </p>
            </div>
          </div>

          {/* Benefit Card 4 */}
          <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100 flex flex-col">
            <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
              <Flame className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Combat Burnout</h3>
            <p className="text-slate-600 flex-grow">
              Reduce the mental fatigue that comes from context-switching between patients and processing overwhelming amounts of information throughout the day.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-100">
              <p className="text-sm text-blue-700 font-medium">
                "Practice Hero has helped me rediscover my passion for medicine. I'm not exhausted at the end of each day." — Dr. Thomas Patel
              </p>
            </div>
          </div>

          {/* Benefit Card 5 */}
          <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100 flex flex-col">
            <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
              <ListChecks className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Catch Critical Details</h3>
            <p className="text-slate-600 flex-grow">
              Never miss important information buried in lengthy records. Our AI highlights key concerns, medication changes, and important follow-ups.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-100">
              <p className="text-sm text-blue-700 font-medium">
                "I spotted a critical drug interaction I might have missed in a complex patient with multiple conditions." — Dr. Jennifer Harris
              </p>
            </div>
          </div>

          {/* Benefit Card 6 */}
          <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100 flex flex-col">
            <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Finish On Time</h3>
            <p className="text-slate-600 flex-grow">
              Complete your notes faster and finish your day on schedule. Go home to your family without a backlog of admin or feeling mentally drained.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-100">
              <p className="text-sm text-blue-700 font-medium">
                "I'm leaving work at 5:30 consistently for the first time in my career. This tool has changed my work-life balance." — Dr. Robert Sharma
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-blue-50 rounded-xl p-6 md:p-8 border border-blue-100">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:flex-1">
              <h3 className="text-2xl font-bold text-slate-900">Research-backed results</h3>
              <p className="mt-2 text-slate-600">Based on <a href="https://www.medrxiv.org/content/10.1101/2025.02.21.25322674v1" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Imperial College London research</a></p>
            </div>
            <div className="mt-6 md:mt-0 md:flex-1 grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 text-center">
                <span className="text-3xl font-bold text-blue-600">7</span>
                <p className="text-sm text-slate-600 mt-1">minutes saved per patient</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <span className="text-3xl font-bold text-blue-600">100%</span>
                <p className="text-sm text-slate-600 mt-1">similar accuracy to clinicians</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <span className="text-3xl font-bold text-blue-600">↑</span>
                <p className="text-sm text-slate-600 mt-1">better at including all key details</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <span className="text-3xl font-bold text-blue-600">↑</span>
                <p className="text-sm text-slate-600 mt-1">more patient-friendly language</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
