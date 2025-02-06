import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface CalendarCardProps {
  date: string;
  title: string;
  time: string;
  attendees: Array<{
    name: string;
    imageUrl: string;
  }>;
}

export const CalendarCard = ({
  date,
  title,
  time,
  attendees,
}: CalendarCardProps) => {
  return (
    <Card className="card-hover">
      <CardContent className="p-4">
        <div className="flex items-center space-x-4">
          <div className="text-center min-w-[60px]">
            <div className="text-sm font-semibold">{date}</div>
            <div className="text-xs text-muted-foreground">{time}</div>
          </div>
          <div className="flex-1">
            <h4 className="font-medium">{title}</h4>
            <div className="flex mt-2 -space-x-2">
              {attendees.slice(0, 3).map((attendee, index) => (
                <Avatar
                  key={index}
                  className="border-2 border-background h-6 w-6"
                >
                  <AvatarImage src={attendee.imageUrl} alt={attendee.name} />
                  <AvatarFallback>{attendee.name.charAt(0)}</AvatarFallback>
                </Avatar>
              ))}
              {attendees.length > 3 && (
                <div className="flex items-center justify-center h-6 w-6 rounded-full bg-muted text-xs">
                  +{attendees.length - 3}
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};