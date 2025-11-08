import { useState } from "react";
import { useRoute } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bed, Bath, Maximize, MapPin, Calendar, Home, Share2, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import familyHome from "@assets/generated_images/Family_home_property_listing_0f996cea.png";
import apartmentBuilding from "@assets/generated_images/Apartment_building_listing_56bdf9a7.png";
import livingRoom from "@assets/generated_images/Living_room_interior_41e74a18.png";
import kitchenImage from "@assets/generated_images/Modern_kitchen_interior_69822e48.png";
import bedroomImage from "@assets/generated_images/Bedroom_interior_0e0d42e2.png";

//todo: remove mock functionality
const mockProperty = {
  id: "1",
  images: [familyHome, livingRoom, kitchenImage, bedroomImage],
  title: "Casa Moderna em Condomínio Fechado com Área de Lazer Completa",
  price: "R$ 850.000",
  location: "Alphaville, Barueri - SP",
  bedrooms: 3,
  bathrooms: 2,
  area: 180,
  parking: 2,
  type: "venda" as const,
  featured: true,
  description: "Magnifica casa moderna em condomínio fechado de alto padrão em Alphaville. Projeto arquitetônico contemporâneo com acabamentos premium, amplos espaços integrados e iluminação natural. O condomínio oferece completa infraestrutura de lazer incluindo piscina, quadra, salão de festas e área verde. Localização privilegiada próxima a shopping centers, escolas renomadas e fácil acesso às principais vias.",
  features: [
    "3 suítes com closet",
    "Cozinha planejada",
    "Varanda gourmet",
    "Piscina no condomínio",
    "Quadra poliesportiva",
    "Salão de festas",
    "Segurança 24h",
    "Portaria remota",
  ],
  year: "2020",
  code: "CLEM-001",
};

const similarProperties = [
  {
    id: "2",
    image: apartmentBuilding,
    title: "Apartamento Completo no Centro",
    price: "R$ 3.500",
    location: "Centro, São Paulo - SP",
    bedrooms: 2,
    bathrooms: 1,
    area: 75,
    type: "aluguel" as const,
  },
  {
    id: "3",
    image: livingRoom,
    title: "Cobertura Duplex Vista Panorâmica",
    price: "R$ 1.200.000",
    location: "Jardins, São Paulo - SP",
    bedrooms: 4,
    bathrooms: 3,
    area: 250,
    type: "venda" as const,
  },
];

export default function PropertyDetail() {
  const [, params] = useRoute("/imoveis/:id");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Interest form submitted:", formData);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % mockProperty.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + mockProperty.images.length) % mockProperty.images.length);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="relative h-[500px] bg-muted">
          <img
            src={mockProperty.images[currentImageIndex]}
            alt={mockProperty.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
            onClick={prevImage}
            data-testid="button-prev-image"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
            onClick={nextImage}
            data-testid="button-next-image"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {mockProperty.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImageIndex ? 'bg-white w-8' : 'bg-white/50'
                }`}
                data-testid={`button-image-${index}`}
              />
            ))}
          </div>

          <div className="absolute top-4 right-4 flex gap-2">
            <Button variant="outline" size="icon" className="bg-white/90 hover:bg-white" data-testid="button-share">
              <Share2 className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="bg-white/90 hover:bg-white" data-testid="button-favorite">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant={mockProperty.type === "venda" ? "default" : "secondary"}>
                      {mockProperty.type === "venda" ? "Venda" : "Aluguel"}
                    </Badge>
                    {mockProperty.featured && (
                      <Badge className="bg-accent text-accent-foreground border-accent-border">
                        Destaque
                      </Badge>
                    )}
                  </div>
                  <h1 className="text-3xl font-bold mb-2">{mockProperty.title}</h1>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{mockProperty.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary">{mockProperty.price}</div>
                  <div className="text-sm text-muted-foreground">Código: {mockProperty.code}</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b">
                <div className="flex items-center gap-2">
                  <Bed className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-semibold">{mockProperty.bedrooms}</div>
                    <div className="text-sm text-muted-foreground">Quartos</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-semibold">{mockProperty.bathrooms}</div>
                    <div className="text-sm text-muted-foreground">Banheiros</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Maximize className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-semibold">{mockProperty.area}m²</div>
                    <div className="text-sm text-muted-foreground">Área</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Home className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-semibold">{mockProperty.parking}</div>
                    <div className="text-sm text-muted-foreground">Vagas</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-semibold">{mockProperty.year}</div>
                    <div className="text-sm text-muted-foreground">Ano</div>
                  </div>
                </div>
              </div>

              <Tabs defaultValue="description" className="mb-8" data-testid="tabs-property-info">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="description" data-testid="tab-description">Descrição</TabsTrigger>
                  <TabsTrigger value="features" data-testid="tab-features">Características</TabsTrigger>
                  <TabsTrigger value="location" data-testid="tab-location">Localização</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="mt-6" data-testid="content-description">
                  <p className="text-muted-foreground leading-relaxed">{mockProperty.description}</p>
                </TabsContent>
                <TabsContent value="features" className="mt-6" data-testid="content-features">
                  <div className="grid grid-cols-2 gap-4">
                    {mockProperty.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2" data-testid={`feature-${index}`}>
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="location" className="mt-6" data-testid="content-location">
                  <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <MapPin className="h-12 w-12 mx-auto mb-2" />
                      <p>Mapa de localização será integrado aqui</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <div>
                <h2 className="text-2xl font-bold mb-6">Imóveis Similares</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {similarProperties.map((property) => (
                    <PropertyCard key={property.id} {...property} />
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-20">
                <CardHeader>
                  <CardTitle>Tenho Interesse</CardTitle>
                  <CardDescription>Preencha o formulário e nossa equipe entrará em contato</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Nome</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        data-testid="input-name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        data-testid="input-email"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        data-testid="input-phone"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Mensagem</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Gostaria de agendar uma visita..."
                        rows={3}
                        data-testid="textarea-message"
                      />
                    </div>
                    <Button type="submit" className="w-full" data-testid="button-submit-interest">
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
