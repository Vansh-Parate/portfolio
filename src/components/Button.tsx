"use client"

import type React from "react"

interface ButtonProps {
  children: React.ReactNode
  variant?: "default" | "ghost" | "outline"
  size?: "sm" | "md" | "lg"
  className?: string
  onClick?: () => void
}

export function Button({ children, variant = "default", size = "md", className = "", onClick }: ButtonProps) {
  const variants = {
    default: "bg-neutral-100 text-neutral-900 hover:bg-neutral-200",
    ghost: "bg-transparent text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/50",
    outline: "border border-neutral-700 text-neutral-400 hover:text-neutral-100 hover:border-neutral-600",
  }

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  }

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-lg font-satoshi font-medium transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  )
}
