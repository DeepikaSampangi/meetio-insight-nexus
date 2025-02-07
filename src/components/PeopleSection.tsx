
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PersonCard } from "@/components/PersonCard";
import { AddPersonDialog } from "@/components/AddPersonDialog";
import { UserPlus } from "lucide-react";

interface PeopleSectionProps {
  people: any[];
  onPersonClick: (person: any) => void;
  onAddPerson: (person: any) => void;
}

export const PeopleSection = ({ people, onPersonClick, onAddPerson }: PeopleSectionProps) => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  return (
    <section className="bg-white/50 backdrop-blur-sm rounded-lg p-6 shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <div>
          <Badge variant="outline" className="mb-2">People</Badge>
          <h2 className="section-title">Key Contacts</h2>
          <p className="section-subtitle">Recent updates from people in your network</p>
        </div>
        <Button
          onClick={() => setIsAddDialogOpen(true)}
          className="flex items-center gap-2"
        >
          <UserPlus className="h-4 w-4" />
          Add Person
        </Button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {people.map((person, index) => (
          <div key={index} onClick={() => onPersonClick(person)} className="cursor-pointer">
            <PersonCard {...person} />
          </div>
        ))}
      </div>
      <AddPersonDialog
        isOpen={isAddDialogOpen}
        onClose={() => setIsAddDialogOpen(false)}
        onAdd={onAddPerson}
      />
    </section>
  );
};
