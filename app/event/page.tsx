import { FilterIcon, SearchIcon } from "lucide-react"
import EventsList from "@/components/events/events-list"
import EventsFilter from "@/components/events/events-filter"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import CalendarView from "@/components/events/calendar-view"

export default function EventsPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col gap-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">School of IT Events</h1>
          <p className="text-muted-foreground">Discover upcoming workshops, seminars, and networking opportunities</p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="relative w-full sm:max-w-xs">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search events..." className="w-full pl-8" />
          </div>

          <div className="flex gap-2">
            <EventsFilter />
            <Button variant="outline" size="sm" className="h-10">
              <FilterIcon className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>

        <Tabs defaultValue="list" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="list">List View</TabsTrigger>
            <TabsTrigger value="calendar">Calendar View</TabsTrigger>
          </TabsList>
          <TabsContent value="list" className="mt-6">
            <EventsList />
          </TabsContent>
          <TabsContent value="calendar" className="mt-6">
            <CalendarView />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
