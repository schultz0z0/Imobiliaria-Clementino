import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="bg-gradient-to-r from-primary to-secondary text-white py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Entre em Contato</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              Estamos prontos para ajudá-lo a encontrar o imóvel ideal ou esclarecer suas dúvidas
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <ContactForm />
          </div>

          <div className="max-w-5xl mx-auto mt-16">
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card data-testid="card-address">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Endereço</h3>
                      <p className="text-muted-foreground" data-testid="text-address-street">Av. Paulista, 1000</p>
                      <p className="text-muted-foreground" data-testid="text-address-city">Bela Vista, São Paulo - SP</p>
                      <p className="text-muted-foreground" data-testid="text-address-zip">CEP: 01310-100</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card data-testid="card-phone">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Telefones</h3>
                      <p className="text-muted-foreground" data-testid="text-phone-1">(11) 3456-7890</p>
                      <p className="text-muted-foreground" data-testid="text-phone-2">(11) 98765-4321</p>
                      <p className="text-sm text-muted-foreground mt-2" data-testid="text-whatsapp">WhatsApp disponível</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card data-testid="card-email">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Email</h3>
                      <p className="text-muted-foreground" data-testid="text-email-general">contato@clementino.com.br</p>
                      <p className="text-muted-foreground" data-testid="text-email-sales">vendas@clementino.com.br</p>
                      <p className="text-sm text-muted-foreground mt-2" data-testid="text-response-time">Resposta em até 24h</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card data-testid="card-hours">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Horário de Atendimento</h3>
                      <p className="text-muted-foreground" data-testid="text-hours-weekday">Segunda a Sexta: 9h - 18h</p>
                      <p className="text-muted-foreground" data-testid="text-hours-saturday">Sábado: 9h - 13h</p>
                      <p className="text-sm text-muted-foreground mt-2" data-testid="text-hours-sunday">Plantão aos domingos</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-muted rounded-lg h-96 flex items-center justify-center" data-testid="map-placeholder">
              <div className="text-center text-muted-foreground">
                <MapPin className="h-16 w-16 mx-auto mb-4" />
                <p className="text-lg font-medium mb-2">Mapa de Localização</p>
                <p>Mapa interativo será integrado aqui</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
