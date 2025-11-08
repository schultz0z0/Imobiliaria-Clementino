import { Search, MapPin, Home, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import heroImage from "@assets/generated_images/Luxury_property_hero_image_b584c1cb.png";

export default function HeroSection() {
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const handleSearch = () => {
    console.log("Searching:", { propertyType, location, priceRange });
  };

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-sans">
            Encontre o Imóvel dos Seus Sonhos
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Mais de 15 anos conectando pessoas aos melhores imóveis com profissionalismo e confiança.
          </p>

          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2 bg-background rounded-md border px-3 h-10">
                <Home className="h-4 w-4 text-muted-foreground" />
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger className="border-0 h-auto p-0 focus:ring-0" data-testid="select-property-type">
                    <SelectValue placeholder="Tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="casa">Casa</SelectItem>
                    <SelectItem value="apartamento">Apartamento</SelectItem>
                    <SelectItem value="terreno">Terreno</SelectItem>
                    <SelectItem value="comercial">Comercial</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2 bg-background rounded-md border px-3">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Localização"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="border-0 h-auto p-0 focus-visible:ring-0"
                  data-testid="input-location"
                />
              </div>

              <div className="flex items-center gap-2 bg-background rounded-md border px-3 h-10">
                <DollarSign className="h-4 w-4 text-muted-foreground" />
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger className="border-0 h-auto p-0 focus:ring-0" data-testid="select-price-range">
                    <SelectValue placeholder="Faixa de Preço" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-300k">Até R$ 300 mil</SelectItem>
                    <SelectItem value="300k-500k">R$ 300 - 500 mil</SelectItem>
                    <SelectItem value="500k-1m">R$ 500 mil - 1 milhão</SelectItem>
                    <SelectItem value="1m+">Acima de R$ 1 milhão</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={handleSearch}
                className="h-10 bg-primary text-primary-foreground hover:bg-primary border border-primary-border"
                data-testid="button-search"
              >
                <Search className="h-4 w-4 mr-2" />
                Buscar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
