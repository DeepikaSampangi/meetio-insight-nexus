import { PersonCard } from "@/components/PersonCard";
import { MeetingCard } from "@/components/MeetingCard";
import { CalendarCard } from "@/components/CalendarCard";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  // Sample data
  const people = [
    {
      name: "Sarah Chen",
      role: "Product Manager",
      company: "TechCorp Inc.",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      recentUpdate: "Recently published an article on product innovation",
      connectionStrength: "Strong" as const,
    },
    {
      name: "Michael Ross",
      role: "Director of Engineering",
      company: "InnovateTech",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      recentUpdate: "Spoke at TechConf 2024",
      connectionStrength: "Medium" as const,
    },
  ];

  const meetings = [
    {
      title: "Q2 Strategy Planning",
      date: "2024-04-15",
      time: "10:00 AM",
      location: "Conference Room A",
      attendees: [
        { name: "Sarah Chen", imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" },
        { name: "Michael Ross", imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" },
      ],
      type: "upcoming" as const,
    },
  ];

  const calendarEvents = [
    {
      date: "Apr 15",
      title: "Q2 Strategy Planning",
      time: "10:00 AM",
      attendees: [
        { name: "Sarah Chen", imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" },
        { name: "Michael Ross", imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background animate-fadeIn">
      <div className="container py-8">
        <h1 className="text-4xl font-bold mb-2">Briefing Book</h1>
        <p className="text-muted-foreground mb-8">
          Stay informed about your upcoming meetings and attendees
        </p>

        <div className="grid gap-8">
          {/* People Section */}
          <section>
            <div className="mb-6">
              <Badge className="mb-2">People</Badge>
              <h2 className="section-title">Key Contacts</h2>
              <p className="section-subtitle">
                Recent updates from people in your network
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {people.map((person, index) => (
                <PersonCard key={index} {...person} />
              ))}
            </div>
          </section>

          {/* Meetings Section */}
          <section>
            <div className="mb-6">
              <Badge className="mb-2">Meetings</Badge>
              <h2 className="section-title">Upcoming Meetings</h2>
              <p className="section-subtitle">
                Your scheduled meetings and attendees
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {meetings.map((meeting, index) => (
                <MeetingCard key={index} {...meeting} />
              ))}
            </div>
          </section>

          {/* Calendar Section */}
          <section>
            <div className="mb-6">
              <Badge className="mb-2">Calendar</Badge>
              <h2 className="section-title">Calendar Overview</h2>
              <p className="section-subtitle">
                Your schedule at a glance
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {calendarEvents.map((event, index) => (
                <CalendarCard key={index} {...event} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Index;