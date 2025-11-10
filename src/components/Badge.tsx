import type React from "react"
interface BadgeProps {
  children: React.ReactNode
  variant?: "default" | "outline" | "secondary"
  className?: string
}

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const variants = {
    default: "bg-neutral-100 text-neutral-900",
    outline: "border border-neutral-700 text-neutral-400 bg-transparent",
    secondary: "bg-neutral-800 text-neutral-300",
  }

  return (
    <span
      className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-satoshi font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}