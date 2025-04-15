"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Brain } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Enable smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as Element).closest('a[href^="#"]');
      if (!target) return;

      e.preventDefault();
      const targetId = target.getAttribute('href');
      if (!targetId) return;

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const offsetTop = rect.top + scrollTop;

        window.scrollTo({
          top: offsetTop - 80, // Offset for navbar height
          behavior: 'smooth'
        });
      }
    };

    document.addEventListener('click', handleAnchorClick as EventListener);
    return () => document.removeEventListener('click', handleAnchorClick as EventListener);
  }, []);

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold text-slate-900">
                Practice Hero
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link href="#benefits" className="text-slate-600 hover:text-blue-600">
              GP Benefits
            </Link>
            <Link href="#ehr-systems" className="text-slate-600 hover:text-blue-600">
              EHR Integration
            </Link>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="#pilot">Join Pilot</Link>
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-blue-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link
              href="#benefits"
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50"
              onClick={() => setIsMenuOpen(false)}
            >
              GP Benefits
            </Link>
            <Link
              href="#ehr-systems"
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50"
              onClick={() => setIsMenuOpen(false)}
            >
              EHR Integration
            </Link>
            <Link
              href="#pilot"
              className="block px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Pilot
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
