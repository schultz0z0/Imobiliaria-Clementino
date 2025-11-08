import { Bed, Bath, Maximize, MapPin, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface PropertyCardProps {
  id: string;
  image: string;
  title: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: "venda" | "aluguel";
  featured?: boolean;
}

export default function PropertyCard({
  id,
  image,
  title,
  price,
  location,
  bedrooms,
  bathrooms,
  area,
  type,
  featured = false,
}: PropertyCardProps) {
  return (
    <Card className="overflow-hidden group hover-elevate active-elevate-2 transition-all duration-300" data-testid={`card-property-${id}`}>
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          {featured && (
            <Badge className="bg-accent text-accent-foreground border-accent-border">
              <Star className="h-3 w-3 mr-1" />
              Destaque
            </Badge>
          )}
          <Badge variant={type === "venda" ? "default" : "secondary"}>
            {type === "venda" ? "Venda" : "Aluguel"}
          </Badge>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 min-h-[3.5rem]" data-testid={`text-title-${id}`}>
          {title}
        </h3>
        
        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
          <MapPin className="h-4 w-4" />
          <span className="line-clamp-1">{location}</span>
        </div>

        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            <span>{bedrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            <span>{bathrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Maximize className="h-4 w-4" />
            <span>{area}m²</span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-2xl font-bold text-primary" data-testid={`text-price-${id}`}>
              {price}
            </p>
            {type === "aluguel" && <p className="text-xs text-muted-foreground">por mês</p>}
          </div>
          
          <Link href={`/imoveis/${id}`}>
            <Button variant="outline" size="sm" data-testid={`button-details-${id}`}>
              Ver Detalhes
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
