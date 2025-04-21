"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignInPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate authentication
    setTimeout(() => {
      // Redirect to dashboard after successful login
      router.push("/dashboard")
    }, 1000)
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Sign In</h1>
          <p className="text-gray-500 mb-6">Enter your email and password to login to your account</p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m.example@alumni.edu" className="border-gray-300" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="text-sm text-gray-600 hover:text-gray-800">
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" className="border-gray-300" />
            </div>

            <Button type="submit" className="w-full bg-[#6d4c41] hover:bg-[#5d4037]" disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          <div className="mt-6 text-center text-gray-600">
            Don't have an account?{" "}
            <Link href="/signup" className="text-[#6d4c41] hover:underline font-medium">
              Sign up
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-gray-600 hover:text-gray-800">
            &larr; Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}
