import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Eye, Heart, CheckCircle2, TrendingUp, Users, Shield } from "lucide-react";
import { Link } from "wouter";
import officeImage from "@assets/generated_images/Office_team_environment_df9f6cfa.png";

const timeline = [
  { year: "2010", title: "Fundação", description: "Início das atividades em São Paulo" },
  { year: "2013", title: "Expansão", description: "Abertura de nova filial e 500+ imóveis vendidos" },
  { year: "2016", title: "Certificação", description: "CRECI e certificações de excelência" },
  { year: "2020", title: "Transformação Digital", description: "Lançamento da plataforma online" },
  { year: "2024", title: "Liderança Regional", description: "15.000+ clientes atendidos" },
];

const values = [
  {
    icon: Shield,
    title: "Confiança",
    description: "Transparência e ética em todas as negociações",
  },
  {
    icon: Award,
    title: "Excelência",
    description: "Busca constante pela qualidade superior",
  },
  {
    icon: Heart,
    title: "Comprometimento",
    description: "Dedicação total ao sucesso dos clientes",
  },
  {
    icon: Users,
    title: "Relacionamento",
    description: "Construindo parcerias duradouras",
  },
];

const stats = [
  { value: "15+", label: "Anos de Mercado" },
  { value: "2.500+", label: "Imóveis Vendidos" },
  { value: "15.000+", label: "Clientes Atendidos" },
  { value: "98%", label: "Satisfação" },
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="bg-gradient-to-r from-primary to-secondary text-white py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4" data-testid="badge-since-2010">
              <Award className="h-5 w-5" />
              <span className="text-sm font-medium">Desde 2010</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre a Imobiliária Clementino</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              Mais de 15 anos transformando sonhos em realidade no mercado imobiliário
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                A Imobiliária Clementino nasceu em 2010 com uma missão clara: transformar a experiência de compra, venda e administração de imóveis em São Paulo. Fundada por profissionais com décadas de experiência no setor, começamos com um pequeno escritório e grandes ambições.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Ao longo dos anos, crescemos organicamente, sempre priorizando a satisfação dos nossos clientes e a qualidade dos nossos serviços. Hoje, somos referência em Alphaville e região, atendendo clientes que buscam desde imóveis acessíveis até propriedades de alto padrão.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nossa equipe combina expertise técnica com atendimento humanizado, garantindo que cada transação seja conduzida com profissionalismo, transparência e dedicação total ao sucesso de nossos clientes.
              </p>
            </div>
            <div className="relative">
              <img 
                src={officeImage} 
                alt="Equipe Imobiliária Clementino" 
                className="rounded-lg w-full"
                data-testid="img-office-team"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-lg shadow-lg max-w-[200px]" data-testid="badge-years">
                <div className="text-3xl font-bold mb-1">15 Anos</div>
                <div className="text-sm">de tradição e confiança</div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Nossos Números</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                  <CardContent className="pt-6">
                    <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <Card className="p-8" data-testid="card-mission">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Nossa Missão</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Proporcionar experiências excepcionais no mercado imobiliário, conectando pessoas aos seus imóveis ideais através de profissionalismo, tecnologia e atendimento humanizado, sempre pautados pela ética e transparência.
              </p>
            </Card>

            <Card className="p-8" data-testid="card-vision">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Eye className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold">Nossa Visão</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Ser a imobiliária mais confiável e inovadora da região, reconhecida pela excelência em serviços, uso inteligente de tecnologia e pelo impacto positivo na vida de nossos clientes e comunidade.
              </p>
            </Card>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Nossos Valores</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="text-center hover-elevate transition-all" data-testid={`value-${value.title.toLowerCase()}`}>
                    <CardContent className="pt-8 pb-6">
                      <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Nossa Trajetória</h2>
            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border hidden md:block" />
              <div className="space-y-12">
                {timeline.map((event, index) => (
                  <div key={index} className="relative grid md:grid-cols-2 gap-8 items-center" data-testid={`timeline-${event.year}`}>
                    <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:order-2'}`}>
                      <div className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold mb-2">
                        {event.year}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-muted-foreground">{event.description}</p>
                    </div>
                    <div className="hidden md:block">
                      <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Faça Parte da Nossa História</h2>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Junte-se aos milhares de clientes satisfeitos que confiaram na Imobiliária Clementino
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                data-testid="button-properties"
                asChild
              >
                <Link href="/imoveis">
                  Ver Imóveis
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10"
                data-testid="button-contact"
                asChild
              >
                <Link href="/contato">
                  Entre em Contato
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
