"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { User, Bell } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isMobile = useIsMobile()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="header-bg sticky top-0 z-10 flex h-14 items-center gap-4 px-4 sm:px-6">
        <Link href="/dashboard" className="text-xl font-semibold text-white">
          AlumniConnect
        </Link>
        <div className="flex-1" />
        <nav className="hidden md:flex items-center space-x-4">
          <Link href="/dashboard" className="text-white hover:text-white/80">
            Home
          </Link>
          <Link href="/dashboard/events" className="text-white hover:text-white/80">
            Events
          </Link>
          <Link href="/dashboard/directory" className="text-white hover:text-white/80">
            Directory
          </Link>
          <Link href="/dashboard" className="text-white hover:text-white/80">
            Dashboard
          </Link>
        </nav>
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </Button>
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
          <User className="h-5 w-5" />
          <span className="sr-only">Profile</span>
        </Button>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  )
}
