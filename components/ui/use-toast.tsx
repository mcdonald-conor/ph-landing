"use client"

import type React from "react"

// This is a simplified version of the toast component
import { useState, useEffect } from "react"

type ToastProps = {
  title: string
  description?: string
}

export function toast({ title, description }: ToastProps) {
  const event = new CustomEvent("toast", { detail: { title, description } })
  window.dispatchEvent(event)
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  useEffect(() => {
    const handleToast = (e: Event) => {
      const { title, description } = (e as CustomEvent).detail
      setToasts((prev) => [...prev, { title, description }])

      // Auto dismiss after 5 seconds
      setTimeout(() => {
        setToasts((prev) => prev.slice(1))
      }, 5000)
    }

    window.addEventListener("toast", handleToast)
    return () => window.removeEventListener("toast", handleToast)
  }, [])

  return (
    <>
      {children}
      <div className="fixed bottom-0 right-0 p-6 space-y-4 z-50">
        {toasts.map((toast, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-md animate-in slide-in-from-right"
          >
            <h3 className="font-medium text-gray-900">{toast.title}</h3>
            {toast.description && <p className="text-gray-500 mt-1">{toast.description}</p>}
          </div>
        ))}
      </div>
    </>
  )
}

