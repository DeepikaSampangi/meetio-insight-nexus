
import { Badge } from "@/components/ui/badge";
import { MeetingCard } from "@/components/MeetingCard";

interface MeetingsSectionProps {
  meetings: any[];
  onMeetingClick: (meeting: any) => void;
}

export const MeetingsSection = ({ meetings, onMeetingClick }: MeetingsSectionProps) => {
  return (
    <section className="bg-white/50 backdrop-blur-sm rounded-lg p-6 shadow-lg">
      <div className="mb-6">
        <Badge variant="outline" className="mb-2">Upcoming Meetings</Badge>
        <h2 className="section-title">Scheduled Meetings</h2>
        <p className="section-subtitle">Your upcoming meetings and attendees</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {meetings.map((meeting, index) => (
          <div key={index} onClick={() => onMeetingClick(meeting)} className="cursor-pointer">
            <MeetingCard {...meeting} />
          </div>
        ))}
      </div>
    </section>
  );
};
