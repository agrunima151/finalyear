"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignUpPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate account creation
    setTimeout(() => {
      // Redirect to onboarding after successful signup
      router.push("/onboarding")
    }, 1000)
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Sign Up</h1>
          <p className="text-gray-500 mb-6">Create an account to join the alumni network</p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" placeholder="John Doe" className="border-gray-300" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m.example@alumni.edu" className="border-gray-300" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" className="border-gray-300" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="graduationYear">Graduation Year</Label>
              <Input id="graduationYear" placeholder="2020" className="border-gray-300" />
            </div>

            <Button type="submit" className="w-full bg-[#6d4c41] hover:bg-[#5d4037]" disabled={loading}>
              {loading ? "Creating account..." : "Create Account"}
            </Button>
          </form>

          <div className="mt-6 text-center text-gray-600">
            Already have an account?{" "}
            <Link href="/signin" className="text-[#6d4c41] hover:underline font-medium">
              Sign in
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
