import Link from "next/link"
import Image from "next/image"
import { Mail, Shield } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">PH</span>
              </div>
              <span className="ml-2 text-xl font-bold text-slate-900">
                Practice Hero
              </span>
            </div>
          </div>

          <div className="mt-6 md:mt-0 flex flex-col md:flex-row md:space-x-8 items-center">
            <a
              href="mailto:contact@practicehero.com"
              className="flex items-center text-slate-600 hover:text-blue-600 mb-4 md:mb-0"
            >
              <Mail className="h-5 w-5 mr-2" />
              <span>Contact Us</span>
              </a>
            <div className="flex items-center text-slate-600">
              <Shield className="h-5 w-5 mr-2 text-blue-600" />
              <span>GDPR & NHS Data Security Compliant</span>
            </div>
          </div>
          </div>

        <div className="mt-8 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Practice Hero. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-slate-500 hover:text-blue-600 mr-6">
              Privacy Policy
                </Link>
            <Link href="/terms" className="text-sm text-slate-500 hover:text-blue-600">
                  Terms of Service
                </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
