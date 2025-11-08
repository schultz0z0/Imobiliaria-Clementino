import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Upload, Home, FileText, User } from "lucide-react";

const steps = [
  { icon: Home, title: "Dados do Imóvel", description: "Informações básicas" },
  { icon: FileText, title: "Detalhes", description: "Características e fotos" },
  { icon: User, title: "Seus Dados", description: "Informações de contato" },
];

export default function Advertise() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    propertyType: "",
    transactionType: "",
    price: "",
    address: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    description: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="bg-gradient-to-r from-primary to-secondary text-white py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Anuncie Seu Imóvel</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              Preencha o formulário e nossa equipe entrará em contato para avaliar e anunciar seu imóvel
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="flex justify-between items-center mb-8">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="flex-1">
                      <div className="flex items-center">
                        <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-colors ${
                          index <= currentStep 
                            ? 'bg-primary border-primary text-primary-foreground' 
                            : 'border-border text-muted-foreground'
                        }`}>
                          {index < currentStep ? (
                            <CheckCircle2 className="h-6 w-6" />
                          ) : (
                            <Icon className="h-6 w-6" />
                          )}
                        </div>
                        {index < steps.length - 1 && (
                          <div className={`flex-1 h-0.5 mx-2 transition-colors ${
                            index < currentStep ? 'bg-primary' : 'bg-border'
                          }`} />
                        )}
                      </div>
                      <div className="mt-2 text-center">
                        <p className="text-sm font-medium">{step.title}</p>
                        <p className="text-xs text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <Card>
                <CardHeader>
                  <CardTitle>{steps[currentStep].title}</CardTitle>
                  <CardDescription>{steps[currentStep].description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {currentStep === 0 && (
                    <>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label>Tipo de Imóvel</Label>
                          <Select value={formData.propertyType} onValueChange={(value) => setFormData({ ...formData, propertyType: value })}>
                            <SelectTrigger className="mt-1" data-testid="select-property-type">
                              <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="casa">Casa</SelectItem>
                              <SelectItem value="apartamento">Apartamento</SelectItem>
                              <SelectItem value="terreno">Terreno</SelectItem>
                              <SelectItem value="comercial">Comercial</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label>Tipo de Transação</Label>
                          <Select value={formData.transactionType} onValueChange={(value) => setFormData({ ...formData, transactionType: value })}>
                            <SelectTrigger className="mt-1" data-testid="select-transaction-type">
                              <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="venda">Venda</SelectItem>
                              <SelectItem value="aluguel">Aluguel</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="price">Valor Desejado (R$)</Label>
                        <Input
                          id="price"
                          type="number"
                          value={formData.price}
                          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                          placeholder="850.000"
                          className="mt-1"
                          data-testid="input-price"
                        />
                      </div>

                      <div>
                        <Label htmlFor="address">Endereço Completo</Label>
                        <Input
                          id="address"
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          placeholder="Rua, Número, Bairro, Cidade - Estado"
                          className="mt-1"
                          data-testid="input-address"
                        />
                      </div>
                    </>
                  )}

                  {currentStep === 1 && (
                    <>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="bedrooms">Quartos</Label>
                          <Input
                            id="bedrooms"
                            type="number"
                            value={formData.bedrooms}
                            onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
                            className="mt-1"
                            data-testid="input-bedrooms"
                          />
                        </div>
                        <div>
                          <Label htmlFor="bathrooms">Banheiros</Label>
                          <Input
                            id="bathrooms"
                            type="number"
                            value={formData.bathrooms}
                            onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
                            className="mt-1"
                            data-testid="input-bathrooms"
                          />
                        </div>
                        <div>
                          <Label htmlFor="area">Área (m²)</Label>
                          <Input
                            id="area"
                            type="number"
                            value={formData.area}
                            onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                            className="mt-1"
                            data-testid="input-area"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="description">Descrição do Imóvel</Label>
                        <Textarea
                          id="description"
                          value={formData.description}
                          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                          placeholder="Descreva as características principais do imóvel..."
                          rows={5}
                          className="mt-1"
                          data-testid="textarea-description"
                        />
                      </div>

                      <div>
                        <Label>Fotos do Imóvel</Label>
                        <div className="mt-1 border-2 border-dashed rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer" data-testid="upload-photos">
                          <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground mb-1">
                            Clique para fazer upload ou arraste as fotos aqui
                          </p>
                          <p className="text-xs text-muted-foreground">
                            PNG, JPG até 5MB cada (máximo 10 fotos)
                          </p>
                        </div>
                      </div>
                    </>
                  )}

                  {currentStep === 2 && (
                    <>
                      <div>
                        <Label htmlFor="name">Nome Completo</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="mt-1"
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
                          className="mt-1"
                          data-testid="input-email"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Telefone/WhatsApp</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(11) 98765-4321"
                          className="mt-1"
                          data-testid="input-phone"
                        />
                      </div>

                      <div className="bg-muted p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          Ao enviar este formulário, você autoriza a Imobiliária Clementino a entrar em contato 
                          para avaliar e anunciar seu imóvel. Garantimos sigilo total das suas informações.
                        </p>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>

              <div className="flex justify-between mt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  data-testid="button-previous"
                >
                  Voltar
                </Button>

                {currentStep < steps.length - 1 ? (
                  <Button type="button" onClick={handleNext} data-testid="button-next">
                    Próximo
                  </Button>
                ) : (
                  <Button type="submit" data-testid="button-submit">
                    Enviar Anúncio
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
