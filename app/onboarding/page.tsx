"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1)
    } else {
      // Submit and redirect to dashboard
      setLoading(true)
      setTimeout(() => {
        router.push("/dashboard")
      }, 1000)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="header-bg px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-semibold text-white">AlumniConnect</div>
        <div>
          <Button
            variant="ghost"
            className="text-white hover:text-white hover:bg-white/10"
            onClick={() => router.push("/dashboard")}
          >
            Skip for now
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome to AlumniConnect!</h1>
          <p className="text-gray-600">Let's set up your profile to help you connect with your alumni network.</p>
        </div>

        <div className="flex justify-between mb-8">
          <div className={`flex items-center ${step >= 1 ? "text-[#6d4c41]" : "text-gray-400"}`}>
            <div
              className={`rounded-full w-8 h-8 flex items-center justify-center mr-2 ${step >= 1 ? "bg-[#6d4c41] text-white" : "bg-gray-200"}`}
            >
              {step > 1 ? <CheckCircle2 className="h-5 w-5" /> : "1"}
            </div>
            <span>Basic Info</span>
          </div>
          <div className="border-t border-gray-300 flex-1 self-center mx-4"></div>
          <div className={`flex items-center ${step >= 2 ? "text-[#6d4c41]" : "text-gray-400"}`}>
            <div
              className={`rounded-full w-8 h-8 flex items-center justify-center mr-2 ${step >= 2 ? "bg-[#6d4c41] text-white" : "bg-gray-200"}`}
            >
              {step > 2 ? <CheckCircle2 className="h-5 w-5" /> : "2"}
            </div>
            <span>Education</span>
          </div>
          <div className="border-t border-gray-300 flex-1 self-center mx-4"></div>
          <div className={`flex items-center ${step >= 3 ? "text-[#6d4c41]" : "text-gray-400"}`}>
            <div
              className={`rounded-full w-8 h-8 flex items-center justify-center mr-2 ${step >= 3 ? "bg-[#6d4c41] text-white" : "bg-gray-200"}`}
            >
              {step > 3 ? <CheckCircle2 className="h-5 w-5" /> : "3"}
            </div>
            <span>Career</span>
          </div>
        </div>

        {step === 1 && (
          <Card className="border border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>Tell us about yourself</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" defaultValue="Sarah Anderson" className="border-gray-300" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="headline">Headline</Label>
                <Input id="headline" placeholder="Software Engineer at TechCorp" className="border-gray-300" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="San Francisco, CA" className="border-gray-300" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea id="bio" placeholder="Tell us about yourself..." className="border-gray-300 min-h-[100px]" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={handleNext} className="bg-[#6d4c41] hover:bg-[#5d4037]">
                Next
              </Button>
            </CardFooter>
          </Card>
        )}

        {step === 2 && (
          <Card className="border border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle>Education</CardTitle>
              <CardDescription>Tell us about your educational background</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="degree">Degree</Label>
                <Select defaultValue="bs">
                  <SelectTrigger className="border-gray-300">
                    <SelectValue placeholder="Select your degree" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bs">Bachelor of Science</SelectItem>
                    <SelectItem value="ba">Bachelor of Arts</SelectItem>
                    <SelectItem value="ms">Master of Science</SelectItem>
                    <SelectItem value="ma">Master of Arts</SelectItem>
                    <SelectItem value="phd">Ph.D.</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="major">Major</Label>
                <Input id="major" defaultValue="Computer Science" className="border-gray-300" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="graduationYear">Graduation Year</Label>
                <Input id="graduationYear" defaultValue="2020" className="border-gray-300" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="activities">Activities & Societies</Label>
                <Textarea id="activities" placeholder="Clubs, sports, organizations..." className="border-gray-300" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setStep(1)}>
                Back
              </Button>
              <Button onClick={handleNext} className="bg-[#6d4c41] hover:bg-[#5d4037]">
                Next
              </Button>
            </CardFooter>
          </Card>
        )}

        {step === 3 && (
          <Card className="border border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle>Career Information</CardTitle>
              <CardDescription>Tell us about your professional experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPosition">Current Position</Label>
                <Input id="currentPosition" defaultValue="Software Engineer" className="border-gray-300" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" defaultValue="TechCorp" className="border-gray-300" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="industry">Industry</Label>
                <Select defaultValue="tech">
                  <SelectTrigger className="border-gray-300">
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tech">Technology</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="skills">Skills</Label>
                <Textarea id="skills" placeholder="JavaScript, React, Node.js..." className="border-gray-300" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setStep(2)}>
                Back
              </Button>
              <Button onClick={handleNext} className="bg-[#6d4c41] hover:bg-[#5d4037]" disabled={loading}>
                {loading ? "Completing Setup..." : "Complete Setup"}
              </Button>
            </CardFooter>
          </Card>
        )}
      </main>
    </div>
  )
}
