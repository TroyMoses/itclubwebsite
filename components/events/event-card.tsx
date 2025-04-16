"use client"

import { useState } from "react"
import Image from "next/image"
import { Calendar, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import type { Event } from "@/types/event"
import EventDetailsDialog from "./event-details-dialog"

interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {
  const [showDetails, setShowDetails] = useState(false)

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    })
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    })
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "workshop":
        return "bg-blue-100 text-blue-800"
      case "seminar":
        return "bg-purple-100 text-purple-800"
      case "competition":
        return "bg-red-100 text-red-800"
      case "networking":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <>
      <Card className="overflow-hidden transition-all hover:shadow-md">
        <div className="relative h-48 w-full">
          <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
          <div className="absolute top-2 right-2">
            <Badge className={`${getCategoryColor(event.category)}`}>
              {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
            </Badge>
          </div>
        </div>
        <CardHeader className="p-4 pb-0">
          <h3 className="text-xl font-bold line-clamp-2">{event.title}</h3>
        </CardHeader>
        <CardContent className="p-4 space-y-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-2 h-4 w-4" />
            {formatDate(event.date)}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="mr-2 h-4 w-4" />
            {formatTime(event.date)}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="mr-2 h-4 w-4" />
            {event.location}
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2 mt-2">{event.description}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between">
          <Button variant="outline" size="sm" onClick={() => setShowDetails(true)}>
            View Details
          </Button>
          <Button size="sm">Register</Button>
        </CardFooter>
      </Card>

      <EventDetailsDialog event={event} open={showDetails} onOpenChange={setShowDetails} />
    </>
  )
}
