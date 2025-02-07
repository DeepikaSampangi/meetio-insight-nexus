
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarCard } from "@/components/CalendarCard";

interface CalendarSectionProps {
  date: Date | undefined;
  onDateSelect: (date: Date | undefined) => void;
  meetings: any[];
}

export const CalendarSection = ({ date, onDateSelect, meetings }: CalendarSectionProps) => {
  return (
    <section className="bg-white/50 backdrop-blur-sm rounded-lg p-6 shadow-lg">
      <div className="mb-6">
        <Badge variant="outline" className="mb-2">My Calendar</Badge>
        <h2 className="section-title">Monthly Overview</h2>
        <p className="section-subtitle">Your schedule at a glance</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card className="p-4">
          <Calendar
            mode="single"
            selected={date}
            onSelect={onDateSelect}
            className="rounded-md border"
          />
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Upcoming Events</h3>
            <div className="space-y-2">
              {meetings.map((meeting, index) => (
                <CalendarCard key={index} {...meeting} />
              ))}
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold mb-4">Today's Schedule</h3>
          <div className="space-y-4">
            {meetings.map((meeting, index) => (
              <div key={index} className="text-sm">
                <p className="font-medium">{meeting.time}</p>
                <p>{meeting.title}</p>
                <div className="flex -space-x-2 mt-2">
                  {meeting.attendees.map((attendee: any, idx: number) => (
                    <Avatar key={idx} className="border-2 border-background w-6 h-6">
                      <AvatarImage src={attendee.imageUrl} />
                      <AvatarFallback>{attendee.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
