"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Event } from "@/types/event"

export default function CalendarView() {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  // This would typically come from an API or database
  const events: Event[] = [
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
  ]

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay()
  }

  const prevMonth = () => {
    setCurrentMonth((prev) => {
      const newMonth = new Date(prev)
      newMonth.setMonth(prev.getMonth() - 1)
      return newMonth
    })
  }

  const nextMonth = () => {
    setCurrentMonth((prev) => {
      const newMonth = new Date(prev)
      newMonth.setMonth(prev.getMonth() + 1)
      return newMonth
    })
  }

  const renderCalendar = () => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()

    const daysInMonth = getDaysInMonth(year, month)
    const firstDayOfMonth = getFirstDayOfMonth(year, month)

    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 border border-gray-200 p-1"></div>)
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day)
      const dayEvents = events.filter((event) => {
        const eventDate = new Date(event.date)
        return eventDate.getDate() === day && eventDate.getMonth() === month && eventDate.getFullYear() === year
      })

      days.push(
        <div key={day} className="h-24 border border-gray-200 p-1 overflow-hidden">
          <div className="font-medium text-sm">{day}</div>
          <div className="space-y-1 mt-1">
            {dayEvents.map((event) => (
              <div
                key={event.id}
                className={`text-xs p-1 rounded truncate ${
                  event.category === "workshop"
                    ? "bg-blue-100 text-blue-800"
                    : event.category === "seminar"
                      ? "bg-purple-100 text-purple-800"
                      : event.category === "competition"
                        ? "bg-red-100 text-red-800"
                        : "bg-green-100 text-green-800"
                }`}
              >
                {event.title}
              </div>
            ))}
          </div>
        </div>,
      )
    }

    return days
  }

  const monthName = currentMonth.toLocaleString("default", { month: "long" })
  const year = currentMonth.getFullYear()

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">
          {monthName} {year}
        </h3>
        <div className="flex gap-1">
          <Button variant="outline" size="icon" onClick={prevMonth}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={nextMonth}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-px">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center font-medium py-2 text-sm">
            {day}
          </div>
        ))}
        {renderCalendar()}
      </div>
    </div>
  )
}
