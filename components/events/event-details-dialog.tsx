"use client"

import { Calendar, Clock, MapPin, User } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import type { Event } from "@/types/event"

interface EventDetailsDialogProps {
  event: Event
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function EventDetailsDialog({ event, open, onOpenChange }: EventDetailsDialogProps) {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <DialogTitle>{event.title}</DialogTitle>
            <Badge className={`${getCategoryColor(event.category)}`}>
              {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
            </Badge>
          </div>
          <DialogDescription>Organized by {event.organizer}</DialogDescription>
        </DialogHeader>

        <div className="relative h-60 w-full my-4">
          <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover rounded-md" />
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center text-sm">
              <Calendar className="mr-2 h-4 w-4" />
              {formatDate(event.date)}
            </div>
            <div className="flex items-center text-sm">
              <Clock className="mr-2 h-4 w-4" />
              {formatTime(event.date)}
            </div>
            <div className="flex items-center text-sm">
              <MapPin className="mr-2 h-4 w-4" />
              {event.location}
            </div>
            <div className="flex items-center text-sm">
              <User className="mr-2 h-4 w-4" />
              {event.organizer}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2">About this event</h4>
            <p className="text-sm text-muted-foreground">{event.description}</p>
          </div>
        </div>

        <DialogFooter className="sm:justify-between">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Close
          </Button>
          <Button>Register Now</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
