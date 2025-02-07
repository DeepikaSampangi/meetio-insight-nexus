
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface AddPersonDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (person: any) => void;
}

export const AddPersonDialog = ({ isOpen, onClose, onAdd }: AddPersonDialogProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    onAdd({
      name,
      role: "New Member",
      company: "Not specified",
      location: "Not specified",
      meetingsCount: 0,
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      recentUpdate: "Just joined",
      connectionStrength: "New",
      social: {
        linkedin,
        twitter,
        instagram,
      },
      expertise: [],
      commonInterests: [],
      employmentHistory: [],
      education: [],
      achievements: [],
    });

    setName("");
    setEmail("");
    setLinkedin("");
    setTwitter("");
    setInstagram("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Person</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email (Optional)</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="linkedin">LinkedIn Username (Optional)</Label>
            <Input
              id="linkedin"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
              placeholder="Enter LinkedIn username"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="twitter">Twitter Handle (Optional)</Label>
            <Input
              id="twitter"
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}
              placeholder="Enter Twitter handle"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="instagram">Instagram Handle (Optional)</Label>
            <Input
              id="instagram"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
              placeholder="Enter Instagram handle"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Add Person</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
