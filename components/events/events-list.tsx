"use client"

import { useState } from "react"
import { EventCard } from "./event-card"
import { Button } from "@/components/ui/button"
import type { Event } from "@/types/event"

export default function EventsList() {
  // This would typically come from an API or database
  const [events, setEvents] = useState<Event[]>([
    {
      id: "1",
      title: "Web Development Workshop",
      description: "Learn the fundamentals of modern web development with React and TypeScript.",
      date: new Date("2025-04-20T14:00:00"),
      location: "IT Building, Room 302",
      category: "workshop",
      image: "/placeholder.svg?height=200&width=400",
      registrationUrl: "#",
      organizer: "Web Development Club",
    },
    {
      id: "2",
      title: "Artificial Intelligence Seminar",
      description: "Explore the latest advancements in AI and machine learning with industry experts.",
      date: new Date("2025-04-25T10:00:00"),
      location: "Science Hall, Auditorium",
      category: "seminar",
      image: "/placeholder.svg?height=200&width=400",
      registrationUrl: "#",
      organizer: "AI Research Group",
    },
    {
      id: "3",
      title: "Cybersecurity Hackathon",
      description: "Test your skills in a 24-hour cybersecurity challenge with prizes for top performers.",
      date: new Date("2025-05-05T09:00:00"),
      location: "IT Building, Lab 101",
      category: "competition",
      image: "/placeholder.svg?height=200&width=400",
      registrationUrl: "#",
      organizer: "Security Club",
    },
    {
      id: "4",
      title: "Tech Industry Networking Event",
      description: "Connect with industry professionals and explore career opportunities in technology.",
      date: new Date("2025-05-12T18:00:00"),
      location: "Student Center, Grand Hall",
      category: "networking",
      image: "/placeholder.svg?height=200&width=400",
      registrationUrl: "#",
      organizer: "Career Services",
    },
    {
      id: "5",
      title: "Mobile App Development Workshop",
      description: "Hands-on workshop on building cross-platform mobile applications with React Native.",
      date: new Date("2025-05-18T13:00:00"),
      location: "IT Building, Room 205",
      category: "workshop",
      image: "/placeholder.svg?height=200&width=400",
      registrationUrl: "#",
      organizer: "Mobile Dev Society",
    },
  ])

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      <div className="flex justify-center">
        <Button variant="outline">Load More Events</Button>
      </div>
    </div>
  )
}
