import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Search, SlidersHorizontal } from "lucide-react";
import familyHome from "@assets/generated_images/Family_home_property_listing_0f996cea.png";
import apartmentBuilding from "@assets/generated_images/Apartment_building_listing_56bdf9a7.png";
import livingRoom from "@assets/generated_images/Living_room_interior_41e74a18.png";
import kitchenImage from "@assets/generated_images/Modern_kitchen_interior_69822e48.png";
import bedroomImage from "@assets/generated_images/Bedroom_interior_0e0d42e2.png";

//todo: remove mock functionality
const mockProperties = [
  {
    id: "1",
    image: familyHome,
    title: "Casa Moderna em Condomínio Fechado com Área de Lazer Completa",
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
  {
    id: "4",
    image: kitchenImage,
    title: "Apartamento Novo com 2 Vagas de Garagem",
    price: "R$ 680.000",
    location: "Vila Mariana, São Paulo - SP",
    bedrooms: 3,
    bathrooms: 2,
    area: 95,
    type: "venda" as const,
    featured: false,
  },
  {
    id: "5",
    image: bedroomImage,
    title: "Casa Térrea com Quintal Amplo",
    price: "R$ 4.200",
    location: "Perdizes, São Paulo - SP",
    bedrooms: 3,
    bathrooms: 2,
    area: 150,
    type: "aluguel" as const,
    featured: false,
  },
  {
    id: "6",
    image: familyHome,
    title: "Sobrado com Piscina e Churrasqueira",
    price: "R$ 920.000",
    location: "Granja Viana, Cotia - SP",
    bedrooms: 4,
    bathrooms: 3,
    area: 220,
    type: "venda" as const,
    featured: false,
  },
];

export default function Properties() {
  const [searchTerm, setSearchTerm] = useState("");
  const [propertyType, setPropertyType] = useState("all");
  const [transactionType, setTransactionType] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 2000000]);
  const [bedrooms, setBedrooms] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  //todo: remove mock functionality - replace with real filtering
  const filteredProperties = mockProperties.filter(property => {
    if (transactionType !== "all" && property.type !== transactionType) return false;
    if (bedrooms !== "all" && property.bedrooms !== parseInt(bedrooms)) return false;
    return true;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="bg-primary text-primary-foreground py-12 px-4">
          <div className="container mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Imóveis Disponíveis</h1>
            <p className="text-lg opacity-90">Encontre o imóvel perfeito para você</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex gap-8">
            <aside className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-80 space-y-6`}>
              <div className="bg-card border rounded-lg p-6 sticky top-20">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold">Filtros</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSearchTerm("");
                      setPropertyType("all");
                      setTransactionType("all");
                      setBedrooms("all");
                      setPriceRange([0, 2000000]);
                    }}
                    data-testid="button-clear-filters"
                  >
                    Limpar
                  </Button>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="search">Buscar</Label>
                    <div className="relative mt-1">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="search"
                        placeholder="Localização ou palavra-chave"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                        data-testid="input-search"
                      />
                    </div>
                  </div>

                  <div>
                    <Label>Tipo de Transação</Label>
                    <Select value={transactionType} onValueChange={setTransactionType}>
                      <SelectTrigger className="mt-1" data-testid="select-transaction-type">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todos</SelectItem>
                        <SelectItem value="venda">Venda</SelectItem>
                        <SelectItem value="aluguel">Aluguel</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Tipo de Imóvel</Label>
                    <Select value={propertyType} onValueChange={setPropertyType}>
                      <SelectTrigger className="mt-1" data-testid="select-property-type">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todos</SelectItem>
                        <SelectItem value="casa">Casa</SelectItem>
                        <SelectItem value="apartamento">Apartamento</SelectItem>
                        <SelectItem value="terreno">Terreno</SelectItem>
                        <SelectItem value="comercial">Comercial</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Quartos</Label>
                    <Select value={bedrooms} onValueChange={setBedrooms}>
                      <SelectTrigger className="mt-1" data-testid="select-bedrooms">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todos</SelectItem>
                        <SelectItem value="1">1 quarto</SelectItem>
                        <SelectItem value="2">2 quartos</SelectItem>
                        <SelectItem value="3">3 quartos</SelectItem>
                        <SelectItem value="4">4+ quartos</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Faixa de Preço</Label>
                    <div className="mt-4 mb-2">
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={2000000}
                        step={50000}
                        className="mb-4"
                        data-testid="slider-price-range"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>R$ {priceRange[0].toLocaleString()}</span>
                        <span>R$ {priceRange[1].toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-muted-foreground">
                  {filteredProperties.length} {filteredProperties.length === 1 ? 'imóvel encontrado' : 'imóveis encontrados'}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="lg:hidden"
                  onClick={() => setShowFilters(!showFilters)}
                  data-testid="button-toggle-filters"
                >
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filtros
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} {...property} />
                ))}
              </div>

              {filteredProperties.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">Nenhum imóvel encontrado com os filtros selecionados</p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchTerm("");
                      setPropertyType("all");
                      setTransactionType("all");
                      setBedrooms("all");
                    }}
                  >
                    Limpar Filtros
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
