import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface PersonCardProps {
  name: string;
  role: string;
  company: string;
  imageUrl: string;
  recentUpdate?: string;
  connectionStrength: "Strong" | "Medium" | "New";
}

export const PersonCard = ({
  name,
  role,
  company,
  imageUrl,
  recentUpdate,
  connectionStrength,
}: PersonCardProps) => {
  const getConnectionColor = (strength: string) => {
    switch (strength) {
      case "Strong":
        return "bg-green-100 text-green-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "New":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="card-hover overflow-hidden">
      <CardHeader className="p-4">
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={imageUrl} alt={name} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
          <Badge className={getConnectionColor(connectionStrength)}>
            {connectionStrength}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-muted-foreground mb-2">{company}</p>
        {recentUpdate && (
          <p className="text-sm border-t pt-2 mt-2">{recentUpdate}</p>
        )}
      </CardContent>
    </Card>
  );
};