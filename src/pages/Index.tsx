import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Linkedin, Twitter, Instagram, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { PeopleSection } from "@/components/PeopleSection";
import { MeetingsSection } from "@/components/MeetingsSection";
import { CalendarSection } from "@/components/CalendarSection";

const Index = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedPerson, setSelectedPerson] = useState<any | null>(null);
  const [selectedMeeting, setSelectedMeeting] = useState<any | null>(null);
  const [people, setPeople] = useState([
    {
      name: "Sarah Chen",
      role: "Product Manager",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      meetingsCount: 3,
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      recentUpdate: "Recently published an article on product innovation",
      connectionStrength: "Strong" as const,
      employmentHistory: [
        { role: "Senior PM at InnoTech", duration: "2019-2021" },
        { role: "Product Owner at StartupX", duration: "2017-2019" }
      ],
      education: [
        { degree: "MBA", school: "Stanford University", year: "2017" },
        { degree: "BS Computer Science", school: "UC Berkeley", year: "2013" }
      ],
      achievements: ["Product of the Year 2023", "Innovation Award 2022"],
      expertise: ["Product Strategy", "Team Leadership", "Innovation Management"],
      commonInterests: ["Product Development", "Agile Methodologies"],
      social: {
        linkedin: "sarah-chen",
        twitter: "@sarahchen",
        instagram: "@sarahc.pm"
      }
    },
    {
      name: "Michael Ross",
      role: "Director of Engineering",
      company: "InnovateTech",
      location: "New York, NY",
      meetingsCount: 5,
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      recentUpdate: "Spoke at TechConf 2024",
      connectionStrength: "Medium" as const,
      employmentHistory: [
        { role: "Lead Engineer at FutureTech", duration: "2018-2022" },
        { role: "Software Architect at WebSolutions", duration: "2015-2018" }
      ],
      education: [
        { degree: "MS Computer Science", school: "MIT", year: "2015" },
        { degree: "BS Electrical Engineering", school: "Caltech", year: "2013" }
      ],
      achievements: ["Tech Leader Award 2023", "Patent holder"],
      expertise: ["System Architecture", "Team Management", "Technical Strategy"],
      commonInterests: ["AI Development", "Cloud Computing"],
      social: {
        linkedin: "michael-ross",
        twitter: "@ross_michael",
        instagram: "@mross.eng"
      }
    },
    {
      name: "Emma Thompson",
      role: "Marketing Director",
      company: "GlobalReach Media",
      location: "London, UK",
      meetingsCount: 4,
      imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
      recentUpdate: "Launched new brand campaign",
      connectionStrength: "Strong" as const,
      employmentHistory: [
        { role: "Marketing Manager at MediaCorp", duration: "2020-2022" },
        { role: "Senior Marketing Specialist at BrandX", duration: "2018-2020" }
      ],
      education: [
        { degree: "MA Marketing", school: "London Business School", year: "2018" },
        { degree: "BA Communications", school: "University of Manchester", year: "2016" }
      ],
      achievements: ["Marketing Excellence Award 2023", "Best Campaign 2022"],
      expertise: ["Digital Marketing", "Brand Strategy", "Content Marketing"],
      commonInterests: ["Marketing Analytics", "Brand Development"],
      social: {
        linkedin: "emma-thompson",
        twitter: "@emmathompson",
        instagram: "@emma.marketing"
      }
    },
  ]);

  const meetings = [
    {
      title: "Q2 Strategy Planning",
      date: "2024-04-15",
      time: "10:00 AM",
      location: "Conference Room A",
      participantsCount: 5,
      attendees: [
        { name: "Sarah Chen", imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" },
        { name: "Michael Ross", imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" },
      ],
      type: "upcoming" as const,
      agenda: [
        "Review Q1 Performance",
        "Set Q2 Objectives",
        "Resource Planning"
      ],
      documents: [
        { name: "Q1 Report.pdf", url: "#" },
        { name: "Strategy Deck.pptx", url: "#" }
      ]
    },
    {
      title: "Marketing Campaign Review",
      date: "2024-04-16",
      time: "2:00 PM",
      location: "Virtual Meeting Room",
      participantsCount: 4,
      attendees: [
        { name: "Emma Thompson", imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e" },
        { name: "Sarah Chen", imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" },
      ],
      type: "upcoming" as const,
      agenda: [
        "Campaign Performance Review",
        "Next Quarter Planning",
        "Budget Allocation"
      ],
      documents: [
        { name: "Campaign_Results.pdf", url: "#" },
        { name: "Budget_Plan.xlsx", url: "#" }
      ]
    },
    {
      title: "Product Development Sync",
      date: "2024-04-17",
      time: "11:00 AM",
      location: "Conference Room B",
      participantsCount: 6,
      attendees: [
        { name: "Michael Ross", imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" },
        { name: "Sarah Chen", imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" },
      ],
      type: "upcoming" as const,
      agenda: [
        "Sprint Review",
        "Feature Prioritization",
        "Technical Challenges Discussion"
      ],
      documents: [
        { name: "Sprint_Report.pdf", url: "#" },
        { name: "Technical_Specs.docx", url: "#" }
      ]
    },
  ];

  const playAudioBrief = (person: any) => {
    const text = `${person.name} is a ${person.role} at ${person.company}. 
                  They have expertise in ${person.expertise.join(', ')}. 
                  Notable achievements include ${person.achievements.join(', ')}.`;
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  const handleAddPerson = (newPerson: any) => {
    setPeople([...people, newPerson]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white animate-fadeIn">
      <div className="container py-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white text-xl font-bold">BB</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">Briefing Book</h1>
              <p className="text-muted-foreground">
                Stay informed about your upcoming meetings and attendees
              </p>
            </div>
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
          <PeopleSection
            people={people}
            onPersonClick={setSelectedPerson}
            onAddPerson={handleAddPerson}
          />
          <MeetingsSection
            meetings={meetings}
            onMeetingClick={setSelectedMeeting}
          />
          <CalendarSection
            date={date}
            onDateSelect={setDate}
            meetings={meetings}
          />
        </div>
      </div>

      {/* Person Dialog */}
      <Dialog open={!!selectedPerson} onOpenChange={() => setSelectedPerson(null)}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>Contact Details</DialogTitle>
          </DialogHeader>
          {selectedPerson && (
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={selectedPerson.imageUrl} />
                  <AvatarFallback>{selectedPerson.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold">{selectedPerson.name}</h3>
                  <p className="text-muted-foreground">{selectedPerson.role} at {selectedPerson.company}</p>
                  <p className="text-sm text-muted-foreground">{selectedPerson.location}</p>
                </div>
                <Button size="icon" variant="outline" onClick={() => playAudioBrief(selectedPerson)}>
                  <Volume2 className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex gap-2">
                {selectedPerson.social && (
                  <>
                    <Button size="icon" variant="outline" asChild>
                      <a href={`https://linkedin.com/in/${selectedPerson.social.linkedin}`} target="_blank">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button size="icon" variant="outline" asChild>
                      <a href={`https://twitter.com/${selectedPerson.social.twitter}`} target="_blank">
                        <Twitter className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button size="icon" variant="outline" asChild>
                      <a href={`https://instagram.com/${selectedPerson.social.instagram}`} target="_blank">
                        <Instagram className="h-4 w-4" />
                      </a>
                    </Button>
                  </>
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Employment History</h4>
                  <div className="space-y-2">
                    {selectedPerson.employmentHistory?.map((job: any, index: number) => (
                      <div key={index} className="text-sm">
                        <p className="font-medium">{job.role}</p>
                        <p className="text-muted-foreground">{job.duration}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Education</h4>
                  <div className="space-y-2">
                    {selectedPerson.education?.map((edu: any, index: number) => (
                      <div key={index} className="text-sm">
                        <p className="font-medium">{edu.degree}</p>
                        <p className="text-muted-foreground">{edu.school}, {edu.year}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Achievements</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    {selectedPerson.achievements?.map((achievement: string, index: number) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Areas of Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedPerson.expertise?.map((skill: string, index: number) => (
                      <Badge key={index} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Common Interests</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedPerson.commonInterests?.map((interest: string, index: number) => (
                      <Badge key={index} variant="outline">{interest}</Badge>
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
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold">{selectedMeeting.title}</h3>
                <p className="text-muted-foreground">
                  {selectedMeeting.date} at {selectedMeeting.time}
                </p>
                <p className="text-muted-foreground">{selectedMeeting.location}</p>
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
                <h4 className="font-medium mb-2">Participants ({selectedMeeting.participantsCount})</h4>
                <div className="grid gap-2">
                  {selectedMeeting.attendees.map((attendee: any, index: number) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 p-2 rounded-md hover:bg-secondary cursor-pointer"
                      onClick={() => {
                        setSelectedMeeting(null);
                        const person = people.find(p => p.name === attendee.name);
                        if (person) setSelectedPerson(person);
                      }}
                    >
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={attendee.imageUrl} />
                        <AvatarFallback>{attendee.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">{attendee.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {selectedMeeting.documents && (
                <div>
                  <h4 className="font-medium mb-2">Related Documents</h4>
                  <div className="space-y-2">
                    {selectedMeeting.documents.map((doc: any, index: number) => (
                      <Button key={index} variant="outline" className="w-full justify-start" asChild>
                        <a href={doc.url} target="_blank">
                          {doc.name}
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
