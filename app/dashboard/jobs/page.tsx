import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Clock, MapPin } from "lucide-react"

export default function JobsPage() {
  const jobs = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "TechCorp",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Looking for an experienced software engineer to join our growing team.",
      posted: "2 days ago",
    },
    {
      id: 2,
      title: "Product Manager",
      company: "InnovateCo",
      location: "Remote",
      type: "Remote",
      description: "Seeking a product manager with 3+ years of experience in SaaS products.",
      posted: "5 days ago",
    },
    {
      id: 3,
      title: "UX/UI Designer",
      company: "DesignHub",
      location: "New York, NY",
      type: "Full-time",
      description: "Join our creative team to design beautiful and functional user experiences.",
      posted: "1 week ago",
    },
    {
      id: 4,
      title: "Marketing Specialist",
      company: "GrowthLabs",
      location: "Remote",
      type: "Contract",
      description: "6-month contract role for a digital marketing specialist with B2B experience.",
      posted: "2 weeks ago",
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Job Opportunities</h1>
        <p className="text-slate-500">Explore career opportunities shared by fellow alumni</p>
      </div>

      <div className="grid gap-6">
        {jobs.map((job) => (
          <Card key={job.id}>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <Building className="h-4 w-4" />
                      <span>{job.company}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{job.posted}</span>
                    </div>
                  </div>
                  <p className="text-slate-600">{job.description}</p>
                </div>
                <div className="flex flex-row md:flex-col gap-2 md:min-w-32 justify-end md:items-end">
                  <Badge className="md:mb-2">{job.type}</Badge>
                  <Button>Apply Now</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
