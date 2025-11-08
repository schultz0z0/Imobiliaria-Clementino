import PropertyCard from "./PropertyCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import familyHome from "@assets/generated_images/Family_home_property_listing_0f996cea.png";
import apartmentBuilding from "@assets/generated_images/Apartment_building_listing_56bdf9a7.png";
import livingRoom from "@assets/generated_images/Living_room_interior_41e74a18.png";

//todo: remove mock functionality
const properties = [
  {
    id: "1",
    image: familyHome,
    title: "Casa Moderna em Condomínio Fechado com Área de Lazer",
    price: "R$ 850.000",
    location: "Alphaville, Barueri - SP",
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    type: "venda" as const,
    featured: true,
  },
  {
    id: "2",
    image: apartmentBuilding,
    title: "Apartamento Completo no Centro da Cidade",
    price: "R$ 3.500",
    location: "Centro, São Paulo - SP",
    bedrooms: 2,
    bathrooms: 1,
    area: 75,
    type: "aluguel" as const,
    featured: true,
  },
  {
    id: "3",
    image: livingRoom,
    title: "Cobertura Duplex com Vista Panorâmica",
    price: "R$ 1.200.000",
    location: "Jardins, São Paulo - SP",
    bedrooms: 4,
    bathrooms: 3,
    area: 250,
    type: "venda" as const,
    featured: true,
  },
];

export default function FeaturedProperties() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Imóveis em Destaque</h2>
            <p className="text-muted-foreground">Seleção especial dos melhores imóveis disponíveis</p>
          </div>
          <Link href="/imoveis">
            <Button variant="outline" className="hidden md:flex" data-testid="button-view-all">
              Ver Todos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/imoveis">
            <Button variant="outline" data-testid="button-view-all-mobile">
              Ver Todos os Imóveis
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
