import { CheckCircle2, Award, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import officeImage from "@assets/generated_images/Office_team_environment_df9f6cfa.png";

const highlights = [
  "Mais de 15 anos de experiência no mercado",
  "Equipe especializada e certificada",
  "Assessoria jurídica completa",
  "Atendimento personalizado",
];

export default function AboutSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
              <Award className="h-4 w-4" />
              Desde 2010
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sua Parceira de Confiança no Mercado Imobiliário
            </h2>
            <p className="text-muted-foreground mb-6 text-lg">
              A Imobiliária Clementino nasceu em 2010 com a missão de transformar a experiência de compra, venda e administração de imóveis. Nossa equipe combina expertise técnica com atendimento humanizado.
            </p>

            <div className="space-y-3 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/sobre">
                <Button data-testid="button-know-more">
                  Conheça Nossa História
                </Button>
              </Link>
              <Link href="/contato">
                <Button variant="outline" data-testid="button-contact-us">
                  Fale Conosco
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src={officeImage} 
                alt="Equipe Imobiliária Clementino" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-lg shadow-lg border max-w-[200px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">15K+</div>
                  <div className="text-xs text-muted-foreground">Clientes</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-card p-6 rounded-lg shadow-lg border max-w-[200px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-xs text-muted-foreground">Satisfação</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
