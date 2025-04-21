import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, MessageSquare, Bell, Bookmark } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Welcome back, Sarah!</h1>
          <p className="text-gray-500">Here's what's happening in your alumni network today.</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="text-gray-600 border-gray-300">
            Class of 2020
          </Badge>
          <Badge variant="outline" className="text-gray-600 border-gray-300">
            Computer Science
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1 border border-gray-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-xl font-semibold mb-4">Your Profile</h2>
              <div className="relative w-24 h-24 rounded-full bg-gray-200 mb-4">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <span className="sr-only">Profile picture</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold">Sarah Anderson</h3>
              <p className="text-gray-500 mb-4">Software Engineer at TechCorp</p>

              <div className="grid grid-cols-3 w-full gap-2 text-center">
                <div className="flex flex-col">
                  <span className="text-xl font-semibold">142</span>
                  <span className="text-xs text-gray-500">Connections</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-semibold">12</span>
                  <span className="text-xs text-gray-500">Events</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-semibold">3</span>
                  <span className="text-xs text-gray-500">Posts</span>
                </div>
              </div>

              <Button variant="outline" className="mt-4 w-full">
                Edit
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 border border-gray-200 shadow-sm">
          <Tabs defaultValue="feed" className="w-full">
            <TabsList className="grid grid-cols-4 w-full bg-gray-100">
              <TabsTrigger value="feed" className="data-[state=active]:bg-white">
                Feed
              </TabsTrigger>
              <TabsTrigger value="events" className="data-[state=active]:bg-white">
                Events
              </TabsTrigger>
              <TabsTrigger value="jobs" className="data-[state=active]:bg-white">
                Jobs
              </TabsTrigger>
              <TabsTrigger value="mentorship" className="data-[state=active]:bg-white">
                Mentorship
              </TabsTrigger>
            </TabsList>

            <TabsContent value="feed" className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">Recent Activity</h3>
              <p className="text-gray-500">Stay updated with your network's latest activities</p>

              <div className="space-y-4 mt-4">
                <div className="flex gap-3 p-3 rounded-lg border border-gray-200">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
                  <div>
                    <p>
                      <span className="font-medium">John Doe</span> shared a new job opportunity at Google
                    </p>
                    <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                      <Clock className="h-3 w-3" /> 2 hours ago
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 p-3 rounded-lg border border-gray-200">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
                  <div>
                    <p>
                      <span className="font-medium">Emily Johnson</span> is attending Tech Alumni Mixer
                    </p>
                    <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                      <Clock className="h-3 w-3" /> Yesterday
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 p-3 rounded-lg border border-gray-200">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
                  <div>
                    <p>
                      <span className="font-medium">Michael Smith</span> posted about Career Transitions in Tech
                    </p>
                    <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                      <Clock className="h-3 w-3" /> 2 days ago
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="events" className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">Upcoming Events</h3>
              <p className="text-gray-500">Events you might be interested in</p>

              <div className="space-y-4 mt-4">
                <div className="p-4 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">Annual Alumni Reunion</h3>
                      <p className="text-gray-600 mt-1">
                        Join us for our annual reunion event with networking, speakers, and more.
                      </p>
                      <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        <span>June 15, 2025 • 6:00 PM</span>
                      </div>
                    </div>
                    <Badge className="bg-gray-800">In-Person</Badge>
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">Tech Industry Panel</h3>
                      <p className="text-gray-600 mt-1">
                        Learn from industry experts about the latest trends in technology.
                      </p>
                      <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        <span>July 8, 2025 • 5:30 PM</span>
                      </div>
                    </div>
                    <Badge variant="outline">Virtual</Badge>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="jobs" className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">Job Opportunities</h3>
              <p className="text-gray-500">Recent job postings from alumni</p>

              <div className="space-y-4 mt-4">
                <div className="p-4 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">Senior Software Engineer</h3>
                      <p className="text-gray-600">TechCorp • San Francisco, CA</p>
                      <p className="text-gray-600 mt-2">
                        Looking for an experienced software engineer to join our growing team.
                      </p>
                      <p className="text-sm text-gray-500 mt-2">Posted 2 days ago</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge>Full-time</Badge>
                      <Button size="sm" className="bg-[#6d4c41] hover:bg-[#5d4037]">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">Product Manager</h3>
                      <p className="text-gray-600">InnovateCo • Remote</p>
                      <p className="text-gray-600 mt-2">
                        Seeking a product manager with 3+ years of experience in SaaS products.
                      </p>
                      <p className="text-sm text-gray-500 mt-2">Posted 5 days ago</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge variant="outline">Remote</Badge>
                      <Button size="sm" className="bg-[#6d4c41] hover:bg-[#5d4037]">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="mentorship" className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">Mentorship Opportunities</h3>
              <p className="text-gray-500">Connect with mentors or become one</p>

              <div className="space-y-6 mt-4">
                <div className="p-4 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-lg">Find a Mentor</h3>
                  <p className="text-gray-600 mt-2">
                    Connect with experienced professionals in your field who can guide your career.
                  </p>
                  <Button variant="outline" className="mt-4">
                    Browse Mentors
                  </Button>
                </div>

                <div className="p-4 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-lg">Become a Mentor</h3>
                  <p className="text-gray-600 mt-2">
                    Share your knowledge and experience with recent graduates and alumni.
                  </p>
                  <Button variant="outline" className="mt-4">
                    Apply to Mentor
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
        <Link href="/dashboard/directory">
          <Card className="flex flex-col items-center p-4 text-center h-full border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="p-2 rounded-full bg-gray-100 mb-3">
              <User className="h-6 w-6 text-gray-600" />
            </div>
            <h3 className="font-medium">Directory</h3>
            <p className="text-sm text-gray-500 mb-3">Find and connect with alumni</p>
          </Card>
        </Link>

        <Link href="/dashboard/messages">
          <Card className="flex flex-col items-center p-4 text-center h-full border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="p-2 rounded-full bg-gray-100 mb-3">
              <MessageSquare className="h-6 w-6 text-gray-600" />
            </div>
            <h3 className="font-medium">Messages</h3>
            <p className="text-sm text-gray-500 mb-3">Chat with your connections</p>
          </Card>
        </Link>

        <Link href="/dashboard/notifications">
          <Card className="flex flex-col items-center p-4 text-center h-full border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="p-2 rounded-full bg-gray-100 mb-3">
              <Bell className="h-6 w-6 text-gray-600" />
            </div>
            <h3 className="font-medium">Notifications</h3>
            <p className="text-sm text-gray-500 mb-3">Stay updated with alerts</p>
          </Card>
        </Link>

        <Link href="/dashboard/saved">
          <Card className="flex flex-col items-center p-4 text-center h-full border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="p-2 rounded-full bg-gray-100 mb-3">
              <Bookmark className="h-6 w-6 text-gray-600" />
            </div>
            <h3 className="font-medium">Saved Items</h3>
            <p className="text-sm text-gray-500 mb-3">Access your bookmarked content</p>
          </Card>
        </Link>
      </div>
    </div>
  )
}
