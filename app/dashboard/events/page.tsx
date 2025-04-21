import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin } from "lucide-react"

export default function EventsPage() {
  const events = [
    {
      id: 1,
      title: "Annual Alumni Reunion",
      description: "Join us for our annual reunion event with networking, speakers, and more.",
      date: "June 15, 2025",
      time: "6:00 PM",
      location: "University Main Campus, Alumni Hall",
      type: "In-Person",
    },
    {
      id: 2,
      title: "Tech Industry Panel",
      description: "Learn from industry experts about the latest trends in technology.",
      date: "July 8, 2025",
      time: "5:30 PM",
      location: "Online via Zoom",
      type: "Virtual",
    },
    {
      id: 3,
      title: "Career Development Workshop",
      description: "Enhance your professional skills with our career development workshop.",
      date: "August 22, 2025",
      time: "2:00 PM",
      location: "Online via Zoom",
      type: "Virtual",
    },
    {
      id: 4,
      title: "Networking Mixer",
      description: "Connect with fellow alumni in your industry at our casual networking event.",
      date: "September 10, 2025",
      time: "7:00 PM",
      location: "Downtown Lounge, 123 Main St",
      type: "In-Person",
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Upcoming Events</h1>
        <p className="text-slate-500">Connect with fellow alumni at these upcoming events</p>
      </div>

      <div className="grid gap-6">
        {events.map((event) => (
          <Card key={event.id}>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold">{event.title}</h3>
                    <Badge variant={event.type === "Virtual" ? "outline" : "default"}>{event.type}</Badge>
                  </div>
                  <p className="text-slate-600">{event.description}</p>
                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row md:flex-col gap-2 md:min-w-32 justify-end md:items-end">
                  <Button>Register</Button>
                  <Button variant="outline">Add to Calendar</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
