import { ShoppingCart, Building2, FileCheck, TrendingUp, Users, Shield } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    icon: ShoppingCart,
    title: "Compra e Venda",
    description: "Assessoria completa para negociação e fechamento de imóveis com total segurança jurídica.",
  },
  {
    icon: Building2,
    title: "Administração",
    description: "Gestão profissional do seu imóvel, desde contratos até manutenção e cobrança.",
  },
  {
    icon: FileCheck,
    title: "Legalização",
    description: "Regularização documental e jurídica de propriedades com equipe especializada.",
  },
  {
    icon: TrendingUp,
    title: "Avaliação",
    description: "Análise técnica e de mercado para determinar o valor real do seu imóvel.",
  },
  {
    icon: Users,
    title: "Consultoria",
    description: "Orientação estratégica para investimentos imobiliários com melhor retorno.",
  },
  {
    icon: Shield,
    title: "Garantia Total",
    description: "Proteção completa em todas as etapas da transação com acompanhamento dedicado.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para todas as suas necessidades imobiliárias com mais de 15 anos de experiência
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover-elevate active-elevate-2 transition-all duration-300" data-testid={`card-service-${index}`}>
                <CardHeader>
                  <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
