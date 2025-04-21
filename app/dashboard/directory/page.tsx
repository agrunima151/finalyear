import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Briefcase, MapPin, Search, User, MessageSquare } from "lucide-react"

export default function DirectoryPage() {
  const alumni = [
    {
      id: 1,
      name: "Sarah Anderson",
      title: "Software Engineer",
      company: "TechCorp",
      location: "San Francisco, CA",
      graduationYear: "2020",
      department: "Computer Science",
    },
    {
      id: 2,
      name: "Michael Smith",
      title: "Product Manager",
      company: "InnovateCo",
      location: "New York, NY",
      graduationYear: "2018",
      department: "Business Administration",
    },
    {
      id: 3,
      name: "Emily Johnson",
      title: "Marketing Director",
      company: "GrowthLabs",
      location: "Chicago, IL",
      graduationYear: "2015",
      department: "Marketing",
    },
    {
      id: 4,
      name: "David Wilson",
      title: "Data Scientist",
      company: "AnalyticsPro",
      location: "Boston, MA",
      graduationYear: "2019",
      department: "Mathematics",
    },
    {
      id: 5,
      name: "Jennifer Lee",
      title: "UX Designer",
      company: "DesignHub",
      location: "Seattle, WA",
      graduationYear: "2017",
      department: "Design",
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Alumni Directory</h1>
        <p className="text-slate-500">Find and connect with fellow alumni</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
          <Input type="search" placeholder="Search by name, company, or location..." className="pl-9 bg-white" />
        </div>
        <Button variant="outline">Filter</Button>
      </div>

      <div className="grid gap-6">
        {alumni.map((person) => (
          <Card key={person.id}>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-slate-200 flex items-center justify-center">
                    <User className="h-10 w-10 text-slate-400" />
                  </div>
                </div>
                <div className="space-y-3 flex-1">
                  <div>
                    <h3 className="text-xl font-semibold">{person.name}</h3>
                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-slate-500">
                      <div className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        <span>
                          {person.title} at {person.company}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{person.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-slate-600">
                      Class of {person.graduationYear}
                    </Badge>
                    <Badge variant="outline" className="text-slate-600">
                      {person.department}
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Message
                    </Button>
                    <Button size="sm" variant="outline">
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
