import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, Briefcase, GraduationCap } from "lucide-react"

export default function MentorshipPage() {
  const mentors = [
    {
      id: 1,
      name: "Jennifer Lee",
      title: "Senior Product Manager",
      company: "TechCorp",
      expertise: ["Product Strategy", "UX Design", "Agile Development"],
      graduationYear: "2010",
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Software Engineering Director",
      company: "InnovateCo",
      expertise: ["Engineering Leadership", "Career Development", "Technical Architecture"],
      graduationYear: "2005",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      title: "Marketing Executive",
      company: "GrowthLabs",
      expertise: ["Digital Marketing", "Brand Strategy", "Content Creation"],
      graduationYear: "2008",
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Mentorship Opportunities</h1>
        <p className="text-slate-500">Connect with mentors or become one</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Find a Mentor</CardTitle>
            <CardDescription>
              Connect with experienced professionals in your field who can guide your career
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              Our mentorship program connects you with alumni who have established successful careers in your field of
              interest. Get personalized guidance, career advice, and industry insights.
            </p>
            <Button>Browse Mentors</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Become a Mentor</CardTitle>
            <CardDescription>Share your knowledge and experience with recent graduates and alumni</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              Give back to your alma mater by mentoring students and recent graduates. Share your professional journey,
              provide guidance, and help shape the next generation of professionals.
            </p>
            <Button>Apply to Mentor</Button>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Featured Mentors</h2>
        <div className="grid gap-6">
          {mentors.map((mentor) => (
            <Card key={mentor.id}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-slate-200 flex items-center justify-center">
                      <User className="h-10 w-10 text-slate-400" />
                    </div>
                  </div>
                  <div className="space-y-3 flex-1">
                    <div>
                      <h3 className="text-xl font-semibold">{mentor.name}</h3>
                      <div className="flex flex-col sm:flex-row gap-2 text-sm text-slate-500">
                        <div className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          <span>
                            {mentor.title} at {mentor.company}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <GraduationCap className="h-4 w-4" />
                          <span>Class of {mentor.graduationYear}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-700 mb-2">Areas of Expertise:</p>
                      <div className="flex flex-wrap gap-2">
                        {mentor.expertise.map((skill) => (
                          <Badge key={skill} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Request Mentorship
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
