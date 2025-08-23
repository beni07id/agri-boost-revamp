import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Building2 } from "lucide-react";

interface CompanyCardProps {
  company: {
    name: string;
    location: string;
    address: string;
    type?: "PT" | "CV" | "UD";
  };
}

const CompanyCard = ({ company }: CompanyCardProps) => {
  return (
    <Card className="card-gradient hover:shadow-hover transition-all duration-300 cursor-pointer group">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-semibold text-primary group-hover:text-primary-light transition-colors">
            {company.name}
          </CardTitle>
          {company.type && (
            <Badge variant="secondary" className="ml-2">
              {company.type}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-start space-x-2">
          <MapPin className="w-4 h-4 text-agribiz-cyan mt-0.5 flex-shrink-0" />
          <span className="text-sm font-medium text-foreground">
            Location: {company.location}
          </span>
        </div>
        <div className="flex items-start space-x-2">
          <Building2 className="w-4 h-4 text-agribiz-cyan mt-0.5 flex-shrink-0" />
          <span className="text-sm text-muted-foreground leading-relaxed">
            Address: {company.address}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompanyCard;