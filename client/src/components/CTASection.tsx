import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Pronto para Encontrar Seu Imóvel Ideal?
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Nossa equipe está pronta para ajudá-lo a realizar o sonho da casa própria ou fazer o melhor investimento.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/imoveis">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 border-2 border-white"
              data-testid="button-cta-properties"
            >
              Ver Imóveis Disponíveis
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/contato">
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10"
              data-testid="button-cta-contact"
            >
              <Phone className="mr-2 h-4 w-4" />
              Falar com Especialista
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
