import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin } from "lucide-react";

interface Attendee {
  name: string;
  imageUrl: string;
}

interface MeetingCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  attendees: Attendee[];
  type: "upcoming" | "past";
}

export const MeetingCard = ({
  title,
  date,
  time,
  location,
  attendees,
  type,
}: MeetingCardProps) => {
  return (
    <Card className="card-hover">
      <CardHeader className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold">{title}</h3>
          <Badge variant={type === "upcoming" ? "default" : "secondary"}>
            {type === "upcoming" ? "Upcoming" : "Past"}
          </Badge>
        </div>
        <div className="flex items-center text-sm text-muted-foreground space-x-4">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{time}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{location}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex -space-x-2">
          {attendees.map((attendee, index) => (
            <Avatar
              key={index}
              className="border-2 border-background h-8 w-8"
            >
              <AvatarImage src={attendee.imageUrl} alt={attendee.name} />
              <AvatarFallback>{attendee.name.charAt(0)}</AvatarFallback>
            </Avatar>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};