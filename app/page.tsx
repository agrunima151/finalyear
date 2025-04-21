import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="header-bg px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-semibold text-white">AlumniConnect</div>
        <div className="space-x-2">
          <Link href="/signin">
            <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10">
              Sign In
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-white text-[#6d4c41] hover:bg-white/90">Sign Up</Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 max-w-4xl mb-6">
          Connect with your Alumni Network
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-12">
          Stay connected with your alma mater and fellow graduates. Build meaningful relationships and explore new
          opportunities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/signup">
            <Button size="lg" className="bg-[#6d4c41] hover:bg-[#5d4037] px-8">
              Get Started
            </Button>
          </Link>
          <Link href="/signin">
            <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 px-8">
              Sign In
            </Button>
          </Link>
        </div>
      </main>

      <footer className="container mx-auto px-4 py-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} AlumniConnect. All rights reserved.
      </footer>
    </div>
  )
}
