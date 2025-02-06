import { PersonCard } from "@/components/PersonCard";
import { MeetingCard } from "@/components/MeetingCard";
import { CalendarCard } from "@/components/CalendarCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedPerson, setSelectedPerson] = useState<any | null>(null);
  const [selectedMeeting, setSelectedMeeting] = useState<any | null>(null);

  // Sample data
  const people = [
    {
      name: "Sarah Chen",
      role: "Product Manager",
      company: "TechCorp Inc.",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      recentUpdate: "Recently published an article on product innovation",
      connectionStrength: "Strong" as const,
      additionalInfo: {
        education: "MBA from Stanford University",
        achievements: ["Product of the Year 2023", "Innovation Award 2022"],
        expertise: ["Product Strategy", "Team Leadership", "Innovation Management"]
      }
    },
    {
      name: "Michael Ross",
      role: "Director of Engineering",
      company: "InnovateTech",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      recentUpdate: "Spoke at TechConf 2024",
      connectionStrength: "Medium" as const,
      additionalInfo: {
        education: "MS in Computer Science from MIT",
        achievements: ["Tech Leader Award 2023", "Patent holder"],
        expertise: ["System Architecture", "Team Management", "Technical Strategy"]
      }
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
      agenda: [
        "Review Q1 Performance",
        "Set Q2 Objectives",
        "Resource Planning"
      ]
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
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Briefing Book</h1>
            <p className="text-muted-foreground">
              Stay informed about your upcoming meetings and attendees
            </p>
          </div>
          <Button
            onClick={() => navigate("/profile")}
            variant="outline"
            className="flex items-center gap-2"
          >
            <User className="h-4 w-4" />
            Profile
          </Button>
        </div>

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
                <div key={index} onClick={() => setSelectedPerson(person)} className="cursor-pointer">
                  <PersonCard {...person} />
                </div>
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
                <div key={index} onClick={() => setSelectedMeeting(meeting)} className="cursor-pointer">
                  <MeetingCard {...meeting} />
                </div>
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
            <div className="grid gap-6 lg:grid-cols-[1fr_auto]">
              <div className="grid gap-4 sm:grid-cols-2">
                {calendarEvents.map((event, index) => (
                  <CalendarCard key={index} {...event} />
                ))}
              </div>
              <Card className="p-4">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </Card>
            </div>
          </section>
        </div>
      </div>

      {/* Person Dialog */}
      <Dialog open={!!selectedPerson} onOpenChange={() => setSelectedPerson(null)}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>Contact Details</DialogTitle>
          </DialogHeader>
          {selectedPerson && (
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={selectedPerson.imageUrl} />
                  <AvatarFallback>{selectedPerson.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{selectedPerson.name}</h3>
                  <p className="text-sm text-muted-foreground">{selectedPerson.role} at {selectedPerson.company}</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium mb-2">Education</h4>
                  <p className="text-sm">{selectedPerson.additionalInfo.education}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Achievements</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    {selectedPerson.additionalInfo.achievements.map((achievement: string, index: number) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Areas of Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedPerson.additionalInfo.expertise.map((skill: string, index: number) => (
                      <Badge key={index} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Meeting Dialog */}
      <Dialog open={!!selectedMeeting} onOpenChange={() => setSelectedMeeting(null)}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>Meeting Details</DialogTitle>
          </DialogHeader>
          {selectedMeeting && (
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg">{selectedMeeting.title}</h3>
                <div className="text-sm text-muted-foreground">
                  <p>{selectedMeeting.date} at {selectedMeeting.time}</p>
                  <p>{selectedMeeting.location}</p>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Agenda</h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  {selectedMeeting.agenda.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Attendees</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedMeeting.attendees.map((attendee: any, index: number) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={attendee.imageUrl} />
                        <AvatarFallback>{attendee.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">{attendee.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;