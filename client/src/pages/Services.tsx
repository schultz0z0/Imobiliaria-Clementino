import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Building2, FileCheck, TrendingUp, Users, Shield, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    icon: ShoppingCart,
    title: "Compra e Venda",
    description: "Assessoria completa do início ao fim da negociação",
    details: [
      "Avaliação precisa de mercado",
      "Captação e qualificação de leads",
      "Visitas guiadas profissionais",
      "Negociação estratégica",
      "Acompanhamento jurídico completo",
      "Suporte até o pós-venda",
    ],
  },
  {
    icon: Building2,
    title: "Administração de Imóveis",
    description: "Gestão profissional para proprietários e locadores",
    details: [
      "Gestão de contratos e renovações",
      "Cobrança de aluguéis e taxas",
      "Manutenção preventiva e corretiva",
      "Vistoria técnica regular",
      "Relatórios mensais detalhados",
      "Atendimento a inquilinos 24/7",
    ],
  },
  {
    icon: FileCheck,
    title: "Legalização",
    description: "Regularização documental e jurídica completa",
    details: [
      "Análise de documentação",
      "Regularização de escrituras",
      "Certidões e registros",
      "Usucapião e inventários",
      "Desmembramento de terrenos",
      "Acompanhamento em cartórios",
    ],
  },
  {
    icon: TrendingUp,
    title: "Avaliação Imobiliária",
    description: "Laudo técnico profissional com metodologia de mercado",
    details: [
      "Inspeção técnica completa",
      "Análise comparativa de mercado",
      "Laudo fotográfico detalhado",
      "Relatório técnico oficial",
      "Avaliação para financiamento",
      "Consultoria de valorização",
    ],
  },
  {
    icon: Users,
    title: "Consultoria Imobiliária",
    description: "Orientação estratégica para seus investimentos",
    details: [
      "Análise de viabilidade de projetos",
      "Planejamento de investimentos",
      "Estudo de rentabilidade",
      "Identificação de oportunidades",
      "Gestão de portfólio imobiliário",
      "Estratégias de valorização",
    ],
  },
  {
    icon: Shield,
    title: "Garantia e Segurança",
    description: "Proteção total em todas as transações",
    details: [
      "Verificação de documentação",
      "Análise de crédito completa",
      "Seguro fiança e caução",
      "Garantia contra inadimplência",
      "Assessoria jurídica preventiva",
      "Proteção contra fraudes",
    ],
  },
];

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="bg-gradient-to-r from-primary to-secondary text-white py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nossos Serviços</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              Soluções completas para todas as suas necessidades imobiliárias com mais de 15 anos de expertise
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid gap-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="overflow-hidden" data-testid={`service-card-${index}`}>
                  <div className="grid md:grid-cols-[300px_1fr] gap-6">
                    <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 flex flex-col items-center justify-center text-center">
                      <div className="w-20 h-20 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="h-10 w-10 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                    
                    <CardContent className="p-8">
                      <h3 className="text-lg font-semibold mb-4">O que oferecemos:</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {service.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start gap-3" data-testid={`service-detail-${index}-${detailIndex}`}>
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="mt-16 bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Pronto para Começar?</h2>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos ajudá-lo a alcançar seus objetivos imobiliários
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                data-testid="button-contact"
                asChild
              >
                <Link href="/contato">
                  Falar com Especialista
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10"
                data-testid="button-properties"
                asChild
              >
                <Link href="/imoveis">
                  Ver Imóveis Disponíveis
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
